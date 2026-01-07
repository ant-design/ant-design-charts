import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
export interface RouteComponentProps<T = ReturnType<typeof useParams>> {
    history?: {
        back: () => void;
        goBack: () => void;
        location: ReturnType<typeof useLocation>;
        push: (url: string, state?: any) => void;
    };
    location?: ReturnType<typeof useLocation>;
    match?: {
        params: T;
    };
    params?: T;
    navigate?: ReturnType<typeof useNavigate>;
}
export declare function withRouter<P extends RouteComponentProps<P>>(Component: React.ComponentType<P>): (props: P) => React.JSX.Element;
