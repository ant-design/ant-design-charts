import React, { useEffect, useState } from 'react';
import { IRouteComponentProps } from 'dumi';
import { Link } from 'dumi/theme';
import Layout from 'dumi-theme-default/src/layout';
import './layout.less';

const importer = require.context('../../docs/.g2plot-plot-api', false, /\.md$/);
const docs = importer.keys().reduce(
  (result, name) => ({
    ...result,
    [name.replace(/^(\.\/)|\.md$/g, '')]: name,
  }),
  {},
);
export default ({ children, ...props }: IRouteComponentProps) => {
  const [tagElements, setTagElements] = useState([]);
  const [activeTag, setActiveTag] = useState('');
  const pathName = props.location.pathname?.split('/').filter((pathname) => pathname);
  const name = `${pathName[pathName.length - 1]}${
    props.location.pathname.indexOf('zh-CN') !== -1 ? '.zh-CN' : ''
  }`;
  const isShowApi = location.href.indexOf('type=api') !== -1;
  const API =
    (isShowApi && importer(docs[name])?.default) ||
    (() => <div style={{ marginTop: 24 }}>文档丢失</div>);

  const crateApiTags = () => {
    const layoutToc = document.getElementsByClassName('__dumi-default-layout-toc');
    if (layoutToc && layoutToc.length) {
      // @ts-ignore
      layoutToc[0].style.display = isShowApi ? 'none' : 'block';
    }
    if (isShowApi) {
      const tagParent = document.getElementsByClassName('markdown')[0];
      const tags = tagParent?.getElementsByTagName('h4') || [];
      const tagElements = [];
      // @ts-ignore
      tags.forEach((ele) => {
        const a = ele.getElementsByTagName('a')[0];
        tagElements.push({
          name: ele.innerText,
          href: a.getAttribute('href') + '?type=api',
          eleId: ele.getAttribute('id'),
        });
      });
      setTagElements(tagElements);
    }
  };

  useEffect(() => {
    crateApiTags();
  }, [location.href]);

  return (
    <Layout {...props}>
      <>
        {docs[name] && (
          <div className="__tab-box">
            <Link
              className="__antd-charts-theme-tab-item"
              to={props.location.pathname}
              data-active={!isShowApi || undefined}
            >
              Demos
            </Link>
            <Link
              className="__antd-charts-theme-tab-item"
              to={`${props.location.pathname}?type=api`}
              data-active={isShowApi || undefined}
            >
              API
            </Link>
          </div>
        )}
        {isShowApi ? <API {...props} /> : children}
        {isShowApi && (
          <ul
            className="__layout-toc-api"
            onClick={(e) => {
              // @ts-ignore
              const currentElementId = e.target.getAttribute('data-id');
              if (currentElementId) {
                setActiveTag(currentElementId);
                const currentEle = document.getElementById(currentElementId);
                window.scrollTo({
                  top: currentEle.offsetTop - 124,
                  behavior: 'smooth',
                });
              }
            }}
          >
            {tagElements.map((item) => (
              <li key={item.name} className={item.eleId === activeTag ? 'active' : ''}>
                <span data-id={item.eleId}>{item.name}</span>
              </li>
            ))}
          </ul>
        )}
      </>
    </Layout>
  );
};
