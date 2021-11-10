import React from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import { useTranslation } from 'react-i18next';
import Banner from '@antv/gatsby-theme-antv/site/components/Banner';
import Features from '@antv/gatsby-theme-antv/site/components/Features';
import Cases from '@antv/gatsby-theme-antv/site/components/Cases';
import './index.less';

const IndexPage = () => {
  const { t, i18n } = useTranslation();

  const coverImage = (
    <img
      style={{ width: '115%', marginLeft: '-8%', marginTop: '7%' }}
      src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*f_gcSbpq-6kAAAAAAAAAAABkARQnAQ"
    />
  ); //BannerSVG();

  const features = [
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
      title: t('开箱即用'),
      description: t('React 组件的方式使用图表，一个简单的配置就能呈现优雅、标准的图表'),
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/aKCFl7vDAB/tubiao.png',
      title: t('图表完善'),
      description: t('支持全量的 G2Plot 图表，以及关系图、流程图、地理可视化，几乎做到同步更新'),
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/oyqsrPh0Kg/houyuan.png',
      title: t('后援强大'),
      description: t('AntV 团队支持，简单易容、专业可靠、无限可能'),
    },
  ];

  const cases = [
    {
      logo: 'https://camo.githubusercontent.com/53886f0e306c9f01c96dee2edca3992830b7cbb769118029a7e5d677deb7e67e/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f616e7466696e63646e2f306234487a4f63454a592f4772617068696e2e737667',
      title: t('Graphin 图可视分析组件'),
      isAppLogo: true,
      description: t('Graphin 是一款基于 G6 封装的 React 分析组件库，专注在关系可视分析领域，简单高效，开箱即用。'),
      link: `https://graphin.antv.vision/${i18n.language}`,
      image: 'https://gw.alipayobjects.com/mdn/rms_00edcb/afts/img/A*LKq7Q5wPA0AAAAAAAAAAAAAAARQnAQ',
    },
    {
      logo: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ch6rTrCxb6YAAAAAAAAAAABkARQnAQ',
      title: t('基于 G6 的动态决策树'),
      isAppLogo: true,
      description: t(
        '基于 G6 实现的动态决策树，辅助用户寻找合适的可视化方式。它展示了 G6 强大的自定义节点和动画的能力。',
      ),
      link: `/${i18n.language}/examples/case/decisionBubbles`,
      image: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*10b6R5fkyJ4AAAAAAAAAAABkARQnAQ',
    },
    {
      logo: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*95GYRI0zPx8AAAAAAAAAAABkARQnAQ',
      title: t('基于 G6 的图分析应用'),
      isAppLogo: true,
      description: t(
        '社交网络分析是图可视化中一个重要的应用场景。随着社交网络越来越流行，人与人、人与组织之间的关系变得越来越复杂，使用传统的分析手段，已经很难满足我们的分析需求。在这种情况下，图分析及图可视化显得愈发重要。',
      ),
      link: `/${i18n.language}/docs/manual/cases/relations`,
      image: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*RYFQSZYewokAAAAAAAAAAABkARQnAQ',
    },
    {
      logo: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*IEQFS5VtXX8AAAAAAAAAAABkARQnAQ',
      title: t('基于 G6 的关系时序分析应用'),
      isAppLogo: true,
      description: t(
        '基于 G6 的关系时序分析应用，解决应急过程中流程、影响面、应急预案等一系列应急决策辅助信息和手段，快速止血以减少和避免故障升级。',
      ),
      link: `/${i18n.language}/docs/manual/cases/sequenceTime`,
      image: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*m41kSpg17ZkAAAAAAAAAAABkARQnAQ',
    },
  ];

  const bannerButtons = [
    {
      text: t('图表示例'),
      link: `/${i18n.language}/examples/tree/compactBox`,
      type: 'primary',
    },
    {
      text: t('开始使用'),
      link: `/${i18n.language}/docs/manual/introduction`,
    },
  ];

  const insNotifications = [
    {
      type: t('推荐'),
      title: t('图可视分析如此简单'),
      date: '2020.11.22',
      link: 'https://www.yuque.com/antv/g6-blog/zgb5d7',
    },
    {
      type: t('推荐'),
      title: t('G6 4.0: 不仅成长了一点'),
      date: '2020.11.22',
      link: 'https://www.yuque.com/antv/g6-blog/nnmqbk',
    },
  ];

  return (
    <>
      <SEO title={t('Ant Design Charts')} titleSuffix="AntV" lang={i18n.language} />
      <Banner
        coverImage={coverImage}
        title={t('Ant Design Charts')}
        description={t('简单好用的 React 图表库。')}
        className="banner"
        buttons={bannerButtons}
      />
      <Features features={features} style={{ width: '100%' }} />
      <Cases cases={cases} />
    </>
  );
};

export default IndexPage;
