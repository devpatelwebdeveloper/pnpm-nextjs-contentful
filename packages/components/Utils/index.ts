export const classNames=(...classes:(string)[]) =>{
  return classes.filter(Boolean).join(' ');
}

export const contentfulLoader = ({ src, width, quality }: { src: string; width?: number; quality?: number }) => {
  return `${src}?w=${width || 800}&q=${quality || 75}`;
};