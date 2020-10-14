import React, { useContext, useEffect, useRef, useState } from 'react';
import { IRouteComponentProps } from 'dumi';
import { Link, context } from 'dumi/theme';
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
  const ref = useRef();
  const { meta } = useContext(context);
  const name = meta.filePath?.match(/([\w-]+)\.md$/i)?.[1] || '';
  const isShowApi = location.href.indexOf('type=api') !== -1;

  const crateApiTags = () => {
    const layoutToc = document.getElementsByClassName('__dumi-default-layout-toc');
    if (layoutToc && layoutToc.length) {
      // @ts-ignore
      layoutToc[0].style.display = isShowApi ? 'none' : 'block';
    }
    if (isShowApi) {
      const tagParent = document.getElementsByClassName('markdown')[0];
      const tags = tagParent.getElementsByTagName('h4');
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
        {isShowApi ? importer(docs[name])?.default() || <div>文档丢失</div> : children}
        {isShowApi && (
          <ul
            className="__layout-toc-api"
            onClick={(e) => {
              // @ts-ignore
              const currentElementId = e.target.getAttribute('data-id');
              if (currentElementId) {
                setActiveTag(currentElementId);
                const currentEle = document.getElementById(currentElementId);
                window.scrollTo(0, currentEle.offsetTop - 124);
              }
            }}
          >
            {tagElements.map((item) => {
              return (
                <li key={item.name} className={item.eleId === activeTag ? 'active' : ''}>
                  <span data-id={item.eleId}>{item.name}</span>
                </li>
              );
            })}
          </ul>
        )}
      </>
    </Layout>
  );
};
