import React, { useContext } from 'react';
import { IRouteComponentProps } from 'dumi';
import { Link, context } from 'dumi/theme';
import Layout from 'dumi-theme-default/src/layout';

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
  const isShowApi = (props.location.query as any).api !== undefined && docs[name];

  return (
    <Layout {...props}>
      <>
        {docs[name] && (
          <div>
            <Link to={props.location.pathname}>Demo</Link>
            &nbsp;|&nbsp;
            <Link to={`${props.location.pathname}?api`}>API</Link>
          </div>
        )}
        {isShowApi ? importer(docs[name]).default() : children}
      </>
    </Layout>
  );
}
