/**
 * inline: true
 */
import { Card, Col, Flex, Row, Tag } from 'antd';
import React, { Suspense, useMemo } from 'react';
import { useLocale, useFullSidebarData, useNavigate } from 'dumi';

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

export default () => {
  const lang = useLocale().id;
  const locale = locales[lang];
  const data = useFullSidebarData();
  const navigate = useNavigate();

  const metas = useMemo(() => URLS.flatMap(url => data[lang === 'zh' ? url : `/en${url}`][0].children)
    .filter(meta => meta.frontmatter.category === 'Components').map(meta => ({
      ...meta,
      ...meta.frontmatter,
      color: meta.frontmatter.type === ChartType.GRAPH ? "purple" : "volcano"
    })).sort((a, b) => a.title.localeCompare(b.title)), [data, lang]);

  return <Suspense fallback={null}>
    <Row gutter={[16, 16]}>
      {metas.map((meta, index) => <Col span={6} key={index}>
        <Card
          size="small"
          onClick={() => navigate(meta.link)}
          hoverable
          title={meta.title}
          extra={<Tag bordered={false} style={{ borderRadius: 2 }} color={meta.color}>{locale[meta.type]}</Tag>}
          style={{ borderRadius: 4 }}
        >
          <Flex justify="center" align="center">
            <img alt={meta.title} src={meta.cover} height={148} />
          </Flex>
        </Card></Col>)}
    </Row>
  </Suspense >
};
