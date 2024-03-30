export function Error({ className = "" }: { className?: string }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15 0C16.9698 -2.93527e-08 18.9204 0.387986 20.7403 1.14181C22.5601 1.89563 24.2137 3.00052 25.6066 4.3934C26.9995 5.78628 28.1044 7.43986 28.8582 9.25975C29.612 11.0796 30 13.0302 30 15C30 16.9698 29.612 18.9204 28.8582 20.7403C28.1044 22.5601 26.9995 24.2137 25.6066 25.6066C24.2137 26.9995 22.5601 28.1044 20.7403 28.8582C18.9204 29.612 16.9698 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 5.92805e-08 15 0ZM15 2.5C11.6848 2.5 8.50537 3.81696 6.16117 6.16117C3.81696 8.50537 2.5 11.6848 2.5 15C2.5 18.3152 3.81696 21.4946 6.16117 23.8388C8.50537 26.183 11.6848 27.5 15 27.5C18.3152 27.5 21.4946 26.183 23.8388 23.8388C26.183 21.4946 27.5 18.3152 27.5 15C27.5 11.6848 26.183 8.50537 23.8388 6.16117C21.4946 3.81696 18.3152 2.5 15 2.5ZM9.5975 9.915L9.74 9.74C9.94714 9.53331 10.2202 9.40584 10.5117 9.37981C10.8031 9.35377 11.0945 9.43081 11.335 9.5975L11.51 9.74L15 13.2325L18.49 9.74C18.6971 9.53331 18.9702 9.40584 19.2617 9.37981C19.5531 9.35377 19.8445 9.43081 20.085 9.5975L20.26 9.74C20.4667 9.94714 20.5942 10.2202 20.6202 10.5117C20.6462 10.8031 20.5692 11.0945 20.4025 11.335L20.26 11.51L16.7675 15L20.26 18.49C20.4667 18.6971 20.5942 18.9702 20.6202 19.2617C20.6462 19.5531 20.5692 19.8445 20.4025 20.085L20.26 20.26C20.0529 20.4667 19.7798 20.5942 19.4883 20.6202C19.1969 20.6462 18.9055 20.5692 18.665 20.4025L18.49 20.26L15 16.7675L11.51 20.26C11.3029 20.4667 11.0298 20.5942 10.7383 20.6202C10.4469 20.6462 10.1555 20.5692 9.915 20.4025L9.74 20.26C9.53331 20.0529 9.40584 19.7798 9.37981 19.4883C9.35377 19.1969 9.43081 18.9055 9.5975 18.665L9.74 18.49L13.2325 15L9.74 11.51C9.53331 11.3029 9.40584 11.0298 9.37981 10.7383C9.35377 10.4469 9.43081 10.1555 9.5975 9.915Z"
        fill="#EE5454"
      />
    </svg>
  );
}