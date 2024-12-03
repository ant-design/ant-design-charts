/**
 * inline: true
 */
import { Card, Col, Divider, Flex, Row, Tag } from 'antd';
import { useFullSidebarData, useLocale, useNavigate } from 'dumi';
import { isEmpty } from 'lodash';
import React, { Suspense, useMemo } from 'react';
import { styled } from 'styled-components';
import { CHART_GENRES, URLS } from './constants';

const StyledWrapper = styled.div`
  .filter-panel {
    margin: 24px 0 32px;

    .filter-tag {
      border-radius: 4px;
    }
  }

  .usage-items {
    margin-top: 2px;

    .usage-item {
      border-radius: 12px;
      padding: 0px 12px;
      font-size: 10px;
      border: 1px solid #f0f0f0;
    }
  }
.`;

export default () => {
  const lang = useLocale().id;
  const data = useFullSidebarData();
  const navigate = useNavigate();
  const [selectedUsages, setSelectedUsages] = React.useState<string[]>(['all']);

  const metas = useMemo(
    () =>
      URLS.flatMap((url) => data[lang === 'zh' ? url : `/en${url}`][0].children)
        .filter((meta) => meta.frontmatter.category === 'Components')
        .map((meta) => {
          const usageIds = (meta.frontmatter.usage || '').split(',').filter((usage) => !isEmpty(usage));
          const usages = CHART_GENRES.filter((tag) => usageIds.includes(tag.id));
          return {
            ...meta,
            ...meta.frontmatter,
            usages,
          };
        })
        .filter(
          (meta) =>
            selectedUsages.includes('all') ||
            selectedUsages.every((usage) => meta.usages.some((item) => item.id === usage)),
        )
        .sort((a, b) => a.title.localeCompare(b.title)),
    [data, lang, selectedUsages],
  );

  const handleChange = (tag: string, checked: boolean) => {
    let nextSelectedUsages;

    if (tag === 'all') {
      nextSelectedUsages = checked ? ['all'] : [];
    } else {
      nextSelectedUsages = checked
        ? [...selectedUsages.filter((t) => t !== 'all'), tag]
        : selectedUsages.filter((t) => t !== tag);

      if (nextSelectedUsages.length === 0) {
        nextSelectedUsages = ['all'];
      }
    }

    setSelectedUsages(nextSelectedUsages);
  };

  return (
    <Suspense fallback={null}>
      <StyledWrapper>
        <div className="filter-panel">
          <Divider />
          <Flex gap={6} wrap align="center">
            {CHART_GENRES.map<React.ReactNode>(({ id, nameZh, nameEn }) => (
              <Tag.CheckableTag
                className="filter-tag"
                key={id}
                checked={selectedUsages.includes(id)}
                onChange={(checked) => handleChange(id, checked)}
              >
                {lang === 'zh' ? nameZh : nameEn}
              </Tag.CheckableTag>
            ))}
          </Flex>
          <Divider />
        </div>

        <Row gutter={[24, 24]}>
          {metas.map((meta, index) => {
            return (
              <Col span={6} key={index}>
                <Card
                  size="small"
                  onClick={() => navigate(meta.link)}
                  hoverable
                  title={meta.title}
                  style={{ borderRadius: 6 }}
                >
                  <Flex justify="center" align="center">
                    <img alt={meta.title} src={meta.cover} height={158} />
                  </Flex>
                  <Flex wrap gap={2} className="usage-items">
                    {meta.usages?.map((usage, index) => (
                      <div className="usage-item" key={index}>
                        {lang === 'zh' ? usage.nameZh : usage.nameEn}
                      </div>
                    ))}
                  </Flex>
                </Card>
              </Col>
            );
          })}
        </Row>
      </StyledWrapper>
    </Suspense>
  );
};
