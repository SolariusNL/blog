import LandingMeshBg from "@/assets/bg.png";
import clsx from "@/util/clsx";
import {
  Badge,
  Button,
  Divider,
  NavLink,
  Text,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import Image from "next/image";
import React from "react";
import {
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineExternalLink,
} from "react-icons/hi";
import Footer from "./foot";
import HoverIcon from "./hover-icon";
import SoodamLogo from "./logo";

type MarkdownProps<Frontmatter> = {
  metadata: Frontmatter;
  children?: React.ReactNode;
  sidebar: React.ReactNode;
};
type Author = {
  name: string;
  avatarUri: string;
  email: string;
};
type MdxLayoutProps = {
  title: string;
  description: string;
  tags: string[];
  date: string;
  authors: Author[];
};

export default function MdxLayout<Frontmatter extends MdxLayoutProps>({
  metadata,
  children,
}: MarkdownProps<Frontmatter>) {
  return (
    <>
      <main
        className={clsx(
          "max-w-5xl mx-auto my-8 px-4 sm:px-6 lg:px-8 grid md:grid-cols-8 gap-10"
        )}
      >
        <aside className="md:col-span-2">
          <SoodamLogo className="h-9" />
          <Divider className="my-4" />
          <div
            className="py-4 px-5 relative mx-auto rounded-lg overflow-hidden"
            style={{
              backgroundColor: "var(--mantine-color-gray-0)",
              backgroundImage: `url(${LandingMeshBg.src})`,
              backgroundSize: "cover",
            }}
          >
            <Title order={4} c="white">
              Purchase Infra for your business
            </Title>
            <div className="flex flex-col gap-1 my-3">
              {[
                "Manage your infrastructure with ease",
                "Scale your applications confidently",
                "Monitor your infrastructure in real-time",
                "CI/CD pipelines for automation",
                "First-class Solarius support",
                "Starts at $99/mo",
              ].map((feature, i) => (
                <div className="flex items-start gap-2 text-sm">
                  <HiOutlineCheckCircle className="flex-shrink-0 mt-1 text-teal-400" />
                  <Text
                    size="sm"
                    style={{
                      color: "var(--mantine-color-gray-3)",
                    }}
                  >
                    {feature}
                  </Text>
                </div>
              ))}
            </div>
            <Button
              radius="xl"
              fullWidth
              component="a"
              href="mailto:sales@solarius.me?subject=Infra%20sales%20inquiry"
            >
              Contact sales
            </Button>
          </div>
          <div className="mt-4" />
          {[
            {
              label: "Framework",
              href: "https://framework.solarius.me",
            },
            {
              label: "Solarius Cloud",
              href: "https://cloud.solarius.me",
            },
            {
              label: "Identity",
              href: "https://id.solarius.me",
            },
            {
              label: "Infra",
              href: "https://infrastructure.solarius.me",
            },
            {
              label: "Community",
              href: "https://discourse.solarius.me",
            },
            {
              label: "Enterprise",
              href: "mailto:enterprise@solarius.me?subject=Enterprise%20Inquiry",
            },
            {
              label: "Help center",
              href: "https://help.solarius.me",
            },
            {
              label: "API reference",
              href: "https://wiki.solarius.me",
            },
          ].map((item, i) => (
            <NavLink
              className="rounded-lg"
              leftSection={<HiOutlineExternalLink />}
              href={item.href}
              key={i}
              label={item.label}
            />
          ))}
        </aside>
        <section className="md:col-span-6">
          <div className="flex items-center flex-wrap gap-2 mb-4">
            {metadata.tags.map((t, i) => (
              <Badge variant="light" key={i}>
                {t}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {metadata.authors.map((author, i) => (
              <a href={`mailto:${author.email}`} className="w-fit" key={i}>
                <HoverIcon className="flex items-center gap-2">
                  <Image
                    src={author.avatarUri}
                    alt={author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <Text fw={500}>{author.name}</Text>
                </HoverIcon>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <HiOutlineCalendar
              style={{
                color: "var(--mantine-color-dimmed)",
              }}
            />
            <Text size="sm" c="dimmed">
              {metadata.date}
            </Text>
          </div>
          <TypographyStylesProvider>{children}</TypographyStylesProvider>
        </section>
      </main>
      <Footer />
    </>
  );
}
