const DashedLine = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={1} {...props}>
    <path strokeDasharray="5 18" d="M16 .5h689" opacity={0.32} />
  </svg>
);

export default DashedLine;
