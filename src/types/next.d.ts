interface ServerSideComponentProp<
    Params,
    SearchParams = undefined,
> {
    params: Params;
    searchParams: SearchParams;
}

declare module '*.svg' {
    import { FC, SVGProps } from 'react';
    export const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  
    const src: string;
    export default src;
  }