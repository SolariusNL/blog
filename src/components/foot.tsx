import Dot from "@/components/dot";
import SoodamLogo from "@/components/soodam-logo";
import clsx from "@/util/clsx";
import { Button, Container, Text } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import classes from "./foot.module.css";

const links = [
  {
    title: "Legal",
    links: [
      {
        label: "Privacy Policy",
        href: "https://help.solarius.me/legal/framework/privacy",
      },
      {
        label: "Terms of Service",
        href: "https://help.solarius.me/legal/framework/terms",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Join us", href: "mailto:careers@solarius.me" },
      { label: "Contact", href: "https://framework.solarius.me/support" },
      { label: "DMCA", href: "https://framework.solarius.me/dmca" },
    ],
  },
];

const Footer = () => {
  const [status, setStatus] = useState("up");

  const groups = links.map((group) => {
    const links = group.links?.map((link, index) => (
      <Link
        className="decoration-transparent w-fit"
        href={String(link.href)}
        key={index}
      >
        <Text className={classes.link}>{link.label}</Text>
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={clsx(classes.footer, "relative")}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <SoodamLogo height={30} />
          <Text
            size="xs"
            color="dimmed"
            mb={12}
            className={classes.description}
          >
            Innovative solutions for the modern web
          </Text>

          <Button
            variant="subtle"
            color="gray"
            size="xs"
            radius="md"
            className="py-1 px-2"
            component="a"
            href="https://status.solarius.me"
            target="_blank"
            rel="noreferrer noopener"
            style={{ textDecoration: "none" }}
          >
            <div className="flex items-center gap-2">
              <Dot
                color={
                  status === "up"
                    ? "green"
                    : status === "problems"
                    ? "red"
                    : "gray"
                }
                classNames={{
                  pulsar: "!w-3 !h-3 bg-opacity-50",
                  dot: "!w-2 !h-2",
                }}
                shouldAnimatePulse={status !== "up"}
                pulse
              />
              <Text size="sm" c="dimmed" fw={500}>
                Systems normal
              </Text>
            </div>
          </Button>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <div className="md:text-start text-center flex flex-col gap-2">
          <Text color="dimmed" size="sm">
            © 2021-2024 Solarius. All rights reserved.
          </Text>
          <Text color="dimmed" size="sm">
            VAT ID: NL-8188.17.147.B01 <span className="ml-1 mr-2">|</span>
            Chamber of Commerce: 34262929
          </Text>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
