/**
 * inline: true
 */
import { Button, Card, Col, Divider, Flex, Row, Tag } from 'antd';
import React, { Suspense, useMemo } from 'react';
import { useLocale, useFullSidebarData, useNavigate } from 'dumi';
import { styled } from 'styled-components';
import { isEmpty } from 'lodash';

enum ChartType {
  PLOT = 'Plot',
  GRAPH = 'Graph',
}

const locales = {
  en: {
    [ChartType.PLOT]: 'Statistics',
    [ChartType.GRAPH]: 'Relations'
  },
  zh: {
    [ChartType.PLOT]: '统计图',
    [ChartType.GRAPH]: '关系图'
  },
};

const URLS = ['/options/plots/special', '/options/graphs'];

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
.`

const usagesData = [{
  id: 'all',
  nameZh: '全部',
  nameEn: 'All',
},
{
  id: 'comparison',
  nameZh: '比较类',
  nameEn: 'Comparison',
}, {
  id: 'distribution',
  nameZh: '分布类',
  nameEn: 'Distribution',
}, {
  id: 'flow',
  nameZh: '流程类',
  nameEn: 'Flow',
}, {
  id: 'proportion',
  nameZh: '占比类',
  nameEn: 'Proportion',
}, {
  id: 'interval',
  nameZh: '区间类',
  nameEn: 'Interval',
}, {
  id: 'relation',
  nameZh: '关系类',
  nameEn: 'Relation',
}, {
  id: 'trend',
  nameZh: '趋势类',
  nameEn: 'Trend',
}, {
  id: 'time',
  nameZh: '时间类',
  nameEn: 'Time',
}, {
  id: 'map',
  nameZh: '地图类',
  nameEn: 'Map',
}, {
  id: 'other',
  nameZh: '其他',
  nameEn: 'Other',
}];

export default () => {
  const lang = useLocale().id;
  const locale = locales[lang];
  const data = useFullSidebarData();
  const navigate = useNavigate();
  const [selectedUsages, setSelectedUsages] = React.useState<string[]>(['all']);

  const metas = useMemo(() => URLS.flatMap(url => data[lang === 'zh' ? url : `/en${url}`][0].children)
    .filter(meta => meta.frontmatter.category === 'Components')
    .map(meta => {
      const usageIds = (meta.frontmatter.usage || '').split(',').filter(usage => !isEmpty(usage));
      const usages = usagesData.filter(tag => usageIds.includes(tag.id));
      return {
        ...meta,
        ...meta.frontmatter,
        usages,
      }
    })
    .filter(meta => selectedUsages.includes('all') || selectedUsages.every(usage => meta.usages.some(item => item.id === usage)))
    .sort((a, b) => a.title.localeCompare(b.title)), [data, lang, selectedUsages]);

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

  return <Suspense fallback={null}>
    <StyledWrapper>
      <div className='filter-panel'>
        <Divider />
        <Flex gap={6} wrap align="center">
          {usagesData.map<React.ReactNode>(({ id, nameZh, nameEn }) => (
            <Tag.CheckableTag
              className='filter-tag'
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
          return <Col span={6} key={index}>
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
              <Flex wrap gap={2} className='usage-items'>
                {meta.usages?.map((usage, index) => <div className='usage-item' key={index}>{
                  lang === 'zh' ? usage.nameZh : usage.nameEn
                }</div>)}
              </Flex>
            </Card></Col>
        })}
      </Row>
    </StyledWrapper>
  </Suspense >
};
