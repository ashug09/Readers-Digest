"use client";
import { MantineProvider, Loader, Center } from "@mantine/core";
import { CssLoader } from "./CssLoader";

export function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Loader: Loader.extend({
            defaultProps: {
              loaders: { ...Loader.defaultLoaders, custom: CssLoader },
              type: "custom",
            },
          }),
        },
      }}
    >
      <Center style={{ height: "60vh" }}>
        <Loader />
      </Center>
    </MantineProvider>
  );
}
