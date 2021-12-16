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
      title: t('专业可靠'),
      description: t('AntV 团队支持，简单易容、专业可靠、无限可能'),
    },
  ];

  const cases = [
    {
      logo: 'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*Uh1MSpdcj-kAAAAAAAAAAABkARQnAQ',
      title: t('图编辑'),
      description: t('来这里尝试一下我们正在开发中的流程图功能'),
      link: `/${i18n.language}/examples/flowchart/basic`,
      image: 'https://gw.alipayobjects.com/zos/antfincdn/5b5C1FvWLE/08c299c3-b3f8-4071-afc1-9aa5e1a9cb3a.png',
      isAppLogo: true,
    },
  ];

  const bannerButtons = [
    {
      text: t('图表示例'),
      link: `/${i18n.language}/examples`,
      type: 'primary',
    },
    {
      text: t('开始使用'),
      link: `/${i18n.language}/docs/manual/getting-started`,
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
