import React, { useContext } from 'react';
import { IRouteComponentProps } from 'dumi';
import { Link, context } from 'dumi/theme';
import Layout from 'dumi-theme-default/src/layout';

import './layout.less';

const importer = require.context('../../docs/.g2-plot-api', false, /\.md$/);
const docs = importer
  .keys()
  .reduce((result, name) => ({
    ...result,
    [name.replace(/^(\.\/)|\.md$/g, '')]: name,
  }), {});


export default ({ children, ...props }: IRouteComponentProps) => {
  const { meta } = useContext(context);
  const name = meta.filePath?.match(/([\w-]+)\.md$/i)?.[1] || '';
  const isShowApi = (props.location.query as any).type === 'api' && docs[name];

  return (
    <Layout {...props}>
      <>
        {docs[name] && (
          <div>
            <Link
              className="__antd-charts-theme-tab-item"
              to={props.location.pathname}
              data-active={!isShowApi || undefined}
            >Demo</Link>
            <Link
              className="__antd-charts-theme-tab-item"
              to={`${props.location.pathname}?type=api`}
              data-active={isShowApi || undefined}
            >API</Link>
          </div>
        )}
        {isShowApi ? importer(docs[name]).default() : children}
      </>
    </Layout>
  );
}
