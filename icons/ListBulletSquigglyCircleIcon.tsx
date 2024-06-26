const ListBulletSquigglyCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path d="M8.861 19.5H6.308c-.499 0-.925-.177-1.278-.53a1.741 1.741 0 0 1-.53-1.278v-2.554l-1.858-1.873c-.17-.18-.299-.38-.386-.6A1.787 1.787 0 0 1 2.125 12c0-.224.044-.446.13-.665.088-.22.217-.42.387-.6L4.5 8.862V6.307c0-.499.177-.925.53-1.278.353-.353.779-.53 1.278-.53H8.86l1.874-1.858c.18-.17.38-.3.6-.386.219-.087.44-.131.665-.131.224 0 .446.044.665.13.22.088.42.217.6.387L15.138 4.5h2.554c.499 0 .925.177 1.278.53.353.353.53.779.53 1.278V8.86l1.858 1.874c.17.18.299.38.386.6.087.219.13.44.13.665 0 .224-.043.446-.13.665-.087.22-.216.42-.386.6L19.5 15.138v2.554c0 .499-.177.925-.53 1.278-.353.353-.78.53-1.278.53h-2.554l-1.873 1.858c-.18.17-.38.299-.6.386-.219.087-.44.13-.665.13-.224 0-.446-.043-.665-.13a1.884 1.884 0 0 1-.6-.386L8.862 19.5ZM9.5 18l2.279 2.279a.3.3 0 0 0 .22.086.3.3 0 0 0 .222-.086l2.279-2.28h3.192a.3.3 0 0 0 .221-.086.3.3 0 0 0 .087-.22V14.5l2.279-2.279a.3.3 0 0 0 .086-.221.3.3 0 0 0-.086-.221L17.999 9.5V6.308a.3.3 0 0 0-.086-.221.3.3 0 0 0-.22-.087H14.5L12.22 3.721A.3.3 0 0 0 12 3.635a.3.3 0 0 0-.221.086L9.5 6H6.308a.3.3 0 0 0-.221.087.3.3 0 0 0-.087.22V9.5l-2.279 2.279a.3.3 0 0 0-.086.22.3.3 0 0 0 .086.222L6 14.5v3.192a.3.3 0 0 0 .087.221.3.3 0 0 0 .22.087H9.5Z" />
    </g>
  </svg>
);

export default ListBulletSquigglyCircleIcon;
