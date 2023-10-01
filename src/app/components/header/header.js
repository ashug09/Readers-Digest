"use client";
import logo from "../../images/logo.svg";
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconOlympics,
  IconDeviceTv,
  IconApple,
  IconBrandCashapp,
  IconBrain,
  IconActivity,
  IconCircleLetterH,
  IconCircleLetterE,
  IconCircleLetterS,
} from "@tabler/icons-react";
import classes from "./header.module.css";
import { IconCircleLetterF } from "@tabler/icons-react";
import Image from "next/image";

const mockdata = [
  {
    icon: IconOlympics,
    title: "Sports",
    description: "Sports promote health, teamwork, and passion.",
  },
  {
    icon: IconDeviceTv,
    title: "Entertainment",
    description: "Entertainment enriches lives through diverse art forms.",
  },
  {
    icon: IconBrandCashapp,
    title: "Business",
    description:
      "Business drives economies and innovation through entrepreneurship.",
  },
  {
    icon: IconApple,
    title: "Food",
    description: "Food nourishes, delights, and brings people together.",
  },
  {
    icon: IconBrain,
    title: "Politics",
    description:
      "Politics shapes society through governance and decision-making.",
  },
  {
    icon: IconActivity,
    title: "Health",
    description: "Health is vital for a fulfilling life.",
  },
];

const languagedata = [
  {
    icon: IconCircleLetterE,
    title: "English",
    code: "en",
  },
  {
    icon: IconCircleLetterH,
    title: "Hindi",
    code: "hi",
  },
  {
    icon: IconCircleLetterS,
    title: "Spanish",
    code: "es",
  },
  {
    icon: IconCircleLetterF,
    title: "French",
    code: "fr",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [linksLanguagesOpened, { toggle: toggleLinkLanguages }] =
    useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton
      onClick={() => {
        sessionStorage.setItem("category", item.title);
        window.location.reload();
      }}
      className={classes.subLink}
      key={item.title}
    >
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const linksLanguages = languagedata.map((item) => (
    <UnstyledButton
      onClick={() => {
        sessionStorage.setItem("language", item.code);
        sessionStorage.setItem("languageName", item.title);
        window.location.reload();
      }}
      className={classes.subLink}
      key={item.title}
    >
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500} className="">
            {item.title}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));
  return (
    <Box pb={40}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          {/* <MantineLogo size={30} /> */}
          <Image src={logo} height={60} width={60} />
          <Group h="100%" gap={0} visibleFrom="sm">
            <a
              onClick={() => {
                sessionStorage.clear();
                window.location.reload();
              }}
              href="#"
              className={classes.link}
            >
              Home
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Categories
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Categories</Text>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Languages
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Languages</Text>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {linksLanguages}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="https://github.com/ashug09" className={classes.link}>
              My GitHub
            </a>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Readers Digest"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a
            onClick={() => {
              sessionStorage.clear();
              window.location.reload();
            }}
            href="#"
            className={classes.link}
          >
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Categories
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>

          <UnstyledButton
            className={classes.link}
            onClick={toggleLinkLanguages}
          >
            <Center inline>
              <Box component="span" mr={5}>
                Languages
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksLanguagesOpened}>{linksLanguages}</Collapse>

          <a href="https://github.com/ashug09" className={classes.link}>
            My GitHub
          </a>
          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
