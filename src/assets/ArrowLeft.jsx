const ArrowLeft = ({ onClick, className = ''}) => (
  <svg
    onClick={onClick}
    className={`cursor-pointer ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="10"
    height="18"
    fill="none"
    viewBox="0 0 10 18"
  >
    <path fill="url(#pattern0_10_113)" d="M0 0h10v18H0z"></path>
    <defs>
      <pattern
        id="pattern0_10_113"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_10_113" transform="scale(.025 .01389)"></use>
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABICAYAAACECrc3AAAER0lEQVR4nM2awbKrNgxAj0xIJ6/92i6767xNp/97e3NvQOoC2xhiwCSYVjMZILbxQZJlWyD8D+TRmwIooL1xuzoXytxiqxPEzNTUFJD0d3+Y/v7HT8X/8Z+A+VPBQP2VoqgJhtAZ9ttV3OmAaqaSU4wB9KiCScO9H/49FdDM1ECynZoBCuJABXMnA3qzLvdnvtQMeoPGwVmAm3BjTVADHCoGBEVWlE5L4QC8A3jzNs65qoBBc3HMbsH1GjzUGs92qQ0nDH6/xYYBzQW93ydFVTQYNWdWHmid8Pn9BWDN7Ra5DtegBjhA8gHlWYZqBpDCjUUHSYhzIZwVNIg+J5JvcQhgOnWFcLan+RIcHOCDj4emk30Jz+RiDQ7eBMwF4G3KWGMTrux+CzKB22/XIjh23zbcvXjqyjcvhYMXTHwmHOwEjHC2WdU3mF7thYMdgBFOnzrOgpnquHx6Ea4YMML1Ba0MUEOGud7egYMCXxrnVR+F17pSMAy/k3gLLMjqXGx9YlY24PDR5kC41S5Hs1pcR0aKjKhqmH8Pg4MFE0ezPgycIE0Cl2uhxFXwkXBZwACnajgD5jvT9HIKfDgczEychhJBIpzlzHpAjNsFOPqcgtngT1478TzxQ8Po3oxxuwB9vwNNk9hx7gTerD5dURUuAlqyTN8MwhJOsLapuyt8wtmK2hZ2X2CXS304SAFtHXAIwsOpyDlwAC4OjhU6n9YBMHF1fW4ue1a11QdEToo7bLarVJFiwO5RE2NZ9phMHt9laaAjpTj1cWm3F9I1xPnkf2l9UTtXi06kcRQqJ0zNvZ4H6SaHAswIeZImHYCPb34SK2g0UMp3Vx8yjuL+u6d/9KCGFbilb1jdJ8dM5i8Xr0U/6xVskC5D9BarCPm85O9MacpSG7MtSpWpcHXTtNU4uGtNyEWIPUmimppcvNFkZK+AwQCXjKtDfXL1SbcgU/WGTIyvfBhkmQkLzJ0+xZHmLluw5jQ506vMjuFSzfTj83VtFj/dE+SMZO4HyvBW1dcU7V+D3J3K3ROCQk0nw3nXY9drxRQwlI/usMcWmewId2vyJQcOkJ/3f/LlmR9A2w7Fe1ZCr6dmPeT9875az5Kjjhna4jD0Vgj4cft10OTX11PZXHsx72TjSqgvMPfbU9Ltxy345KZfiow+6UV0Y3V++OvYpXvOk7OWnHSGXZv86D525bExwucFpmOsNDP9+OiftHn8+m0BMvu+1n+C5JIqc8hq381sBfTgtPFllMSHmMzf1ZJBUZM2As0lZJZd+JjLmzvd51TNVgXIJVXa7IifEkkgq6fTfD5x1ScnRx+GullZdUl9Mhdywn/BJzv/BuS0hGQ0d9dltRI1aoZYTwu0nPyJaIDsdExipH44pJqHcdX1HV3fnf8Na9O2cWrMrXhEQFwDYO2lddU+LluT8H5ltqLxL1SHoj///mv482S2RfHftgLRFQD4F2xIOueYJ+BUAAAAAElFTkSuQmCC"
        id="image0_10_113"
        width="40"
        height="72"
        preserveAspectRatio="none"
      ></image>
    </defs>
  </svg>
);

export default ArrowLeft;