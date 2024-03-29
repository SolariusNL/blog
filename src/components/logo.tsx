const SoodamLogo = (
  props: React.ComponentPropsWithoutRef<"svg">
): JSX.Element => {
  return (
    <svg
      viewBox="0 0 202 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_1002_2)">
        <path
          d="M58.5908 33.3086V6.70859H69.2688C72.0302 6.70859 74.1328 7.35459 75.5768 8.64659C77.0462 9.91326 77.7808 11.5473 77.7808 13.5486C77.7808 15.2206 77.3248 16.5633 76.4128 17.5766C75.5262 18.5646 74.4368 19.2359 73.1448 19.5906C74.6648 19.8946 75.9188 20.6546 76.9068 21.8706C77.8948 23.0613 78.3888 24.4546 78.3888 26.0506C78.3888 28.1533 77.6288 29.8886 76.1088 31.2566C74.5888 32.6246 72.4355 33.3086 69.6488 33.3086H58.5908ZM63.4548 17.8806H68.5468C69.9148 17.8806 70.9662 17.5639 71.7008 16.9306C72.4355 16.2973 72.8028 15.3979 72.8028 14.2326C72.8028 13.1179 72.4355 12.2439 71.7008 11.6106C70.9915 10.9519 69.9148 10.6226 68.4708 10.6226H63.4548V17.8806ZM63.4548 29.3566H68.8888C70.3328 29.3566 71.4475 29.0273 72.2328 28.3686C73.0435 27.6846 73.4488 26.7346 73.4488 25.5186C73.4488 24.2773 73.0308 23.3019 72.1948 22.5926C71.3588 21.8833 70.2315 21.5286 68.8128 21.5286H63.4548V29.3566ZM82.4495 33.3086V5.94859H87.3135V33.3086H82.4495ZM101.327 33.7646C99.5035 33.7646 97.8568 33.3466 96.3875 32.5106C94.9435 31.6746 93.7908 30.5219 92.9295 29.0526C92.0935 27.5579 91.6755 25.8353 91.6755 23.8846C91.6755 21.9339 92.1061 20.2239 92.9675 18.7546C93.8288 17.2599 94.9815 16.0946 96.4255 15.2586C97.8948 14.4226 99.5415 14.0046 101.365 14.0046C103.164 14.0046 104.785 14.4226 106.229 15.2586C107.699 16.0946 108.851 17.2599 109.687 18.7546C110.549 20.2239 110.979 21.9339 110.979 23.8846C110.979 25.8353 110.549 27.5579 109.687 29.0526C108.851 30.5219 107.699 31.6746 106.229 32.5106C104.76 33.3466 103.126 33.7646 101.327 33.7646ZM101.327 29.5466C102.594 29.5466 103.696 29.0779 104.633 28.1406C105.571 27.1779 106.039 25.7593 106.039 23.8846C106.039 22.0099 105.571 20.6039 104.633 19.6666C103.696 18.7039 102.607 18.2226 101.365 18.2226C100.073 18.2226 98.9588 18.7039 98.0215 19.6666C97.1095 20.6039 96.6535 22.0099 96.6535 23.8846C96.6535 25.7593 97.1095 27.1779 98.0215 28.1406C98.9588 29.0779 100.061 29.5466 101.327 29.5466ZM122.121 27.6846C121.209 27.6846 120.36 27.5833 119.575 27.3806L118.169 28.7866C118.6 29.0146 119.182 29.2046 119.917 29.3566C120.652 29.5086 121.842 29.6606 123.489 29.8126C125.997 30.0406 127.821 30.6359 128.961 31.5986C130.101 32.5613 130.671 33.8913 130.671 35.5886C130.671 36.7033 130.367 37.7546 129.759 38.7426C129.151 39.7559 128.214 40.5666 126.947 41.1746C125.68 41.8079 124.059 42.1246 122.083 42.1246C119.398 42.1246 117.232 41.6179 115.585 40.6046C113.938 39.6166 113.115 38.1219 113.115 36.1206C113.115 34.4233 113.938 32.9539 115.585 31.7126C115.078 31.4846 114.635 31.2439 114.255 30.9906C113.9 30.7373 113.584 30.4713 113.305 30.1926V29.3186L116.611 25.8226C115.142 24.5306 114.407 22.8713 114.407 20.8446C114.407 19.5779 114.711 18.4253 115.319 17.3866C115.952 16.3479 116.839 15.5246 117.979 14.9166C119.119 14.3086 120.5 14.0046 122.121 14.0046C123.185 14.0046 124.173 14.1566 125.085 14.4606H132.229V17.4246L128.999 17.6526C129.506 18.6153 129.759 19.6793 129.759 20.8446C129.759 22.1113 129.455 23.2639 128.847 24.3026C128.239 25.3413 127.352 26.1646 126.187 26.7726C125.047 27.3806 123.692 27.6846 122.121 27.6846ZM122.121 23.9606C123.109 23.9606 123.92 23.6946 124.553 23.1626C125.212 22.6306 125.541 21.8706 125.541 20.8826C125.541 19.8946 125.212 19.1346 124.553 18.6026C123.92 18.0706 123.109 17.8046 122.121 17.8046C121.082 17.8046 120.246 18.0706 119.613 18.6026C118.98 19.1346 118.663 19.8946 118.663 20.8826C118.663 21.8706 118.98 22.6306 119.613 23.1626C120.246 23.6946 121.082 23.9606 122.121 23.9606ZM117.561 35.6266C117.561 36.5639 117.992 37.2606 118.853 37.7166C119.74 38.1979 120.816 38.4386 122.083 38.4386C123.299 38.4386 124.287 38.1853 125.047 37.6786C125.807 37.1973 126.187 36.5386 126.187 35.7026C126.187 35.0186 125.934 34.4486 125.427 33.9926C124.946 33.5366 123.97 33.2579 122.501 33.1566C121.462 33.0806 120.5 32.9666 119.613 32.8146C118.878 33.2199 118.346 33.6633 118.017 34.1446C117.713 34.6259 117.561 35.1199 117.561 35.6266Z"
          fill="#6D62AC"
        />
        <path
          d="M40 14.4906H26.4471V1H13.4588C13.4588 8.45283 7.43529 14.4906 0 14.4906V27.5094H13.4588V41H26.4471C26.4471 33.5472 32.5647 27.5094 40 27.5094V14.4906Z"
          fill="#6D62AC"
        />
      </g>
      <defs>
        <clipPath id="clip0_1002_2">
          <rect width="131" height="43" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SoodamLogo;
