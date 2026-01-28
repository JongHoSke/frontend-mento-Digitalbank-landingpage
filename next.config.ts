import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // 기존의 SVG 룰을 찾아서 해당 파일들이 SVGR을 통과하도록 설정
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      // 기존 룰에서 svg 제외
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: { not: /components/ }, // *.svg
      },
      // ?.svg?components 형태일 때 SVGR 적용
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: /components/, // *.svg?components
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              typescript: true,
              icon: true,
              // ⭐ 핵심: SVGO 설정을 통해 ID 충돌 및 하이드레이션 이슈 방지
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false, // viewBox 유지
                        cleanupIds: false, // ID 최적화로 인해 ID가 삭제되거나 변하는 것 방지
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    );

    return config;
  },
};

export default nextConfig;
