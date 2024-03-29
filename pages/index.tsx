import CaseStudy from '@/ui/CaseStudy';
import Box from '@/ui/Box';
import RoughNotationGroup from '@/ui/primitives/RoughNotationGroup';
import RoughNotationText from '@/ui/primitives/RoughNotationText';
import { styled } from '@/stitches.config';
import { amber, blue, green, red, violet } from '@radix-ui/colors';
import { NextPage } from 'next';
import React from 'react';

import RickAndMorty from '../public/images/projects/rickandmorty.png';
import Basement from '../public/images/projects/basement.png';
import Paragraph from '@/ui/Paragraph';
import TitleStyle from '@/ui/TitleStyle';
import NextLink from 'next/link';
import Link from '@/ui/Link';
import PaperPlane from '@/ui/svg/PaperPlane';

const Title = styled('h1', TitleStyle, {
  fontSize: 24
});

const Subtitle = styled('h2', TitleStyle);

const Section = styled('section', {
  '&:not(:first-child)': {
    paddingTop: '6vh'
  }
});

const HireMe: React.FC = () => {
  return (
    <NextLink href="/contact" passHref>
      <Link>
        <RoughNotationText
          config={{
            type: 'circle',
            color: blue.blue5,
            animationDuration: 1500,
            multiline: false
          }}>
          Hire me?
        </RoughNotationText>
      </Link>
    </NextLink>
  );
};

const Home: NextPage = () => {
  return (
    <div>
      <Section id="about">
        <Title>
          Hey! I&apos;m Andrew. I&apos;m a guy passionate about the web.
        </Title>
        <RoughNotationGroup>
          <Paragraph>
            The thing I love the most is the ability to create something that
            can be used by
            <RoughNotationText
              config={{
                type: 'highlight',
                color: red.red5,
                padding: 0,
                animationDuration: 1000
              }}>
              anyone, anywhere, at any time
            </RoughNotationText>
            . How cool is that? <br />
            Have you ever come across a sleek design, a delightful interaction
            or a magical detail that made you feel something? It&apos;s
            wonderful.
          </Paragraph>
          <br />
          <Paragraph>
            I&apos;m a 20-year-old student from Uruguay, currently enrolled in
            <RoughNotationText
              config={{
                type: 'highlight',
                color: violet.violet6,
                animationDuration: 1000
              }}>
              Computer Engineering at UdelaR
            </RoughNotationText>
            , and taking part in{' '}
            <RoughNotationText
              config={{
                type: 'highlight',
                color: green.green5
              }}>
              Jóvenes a Programar
            </RoughNotationText>{' '}
            web-development bootcamp, where we practice our soft-skills and
            learn to work as a team to deliver bi-weekly tasks.
          </Paragraph>
          <br />
          <Paragraph>
            As of now, I&apos;m looking for a job as a
            <RoughNotationText
              config={{
                type: 'highlight',
                color: amber.amber4
              }}>
              Frontend Developer
            </RoughNotationText>
            , where I can learn, grow and get to invest time in what I love.{' '}
            <HireMe />
          </Paragraph>
        </RoughNotationGroup>
      </Section>

      <Section>
        <Subtitle>Skills</Subtitle>
        <Paragraph>
          Through my studies, I&apos;ve learned a solid amount of computer
          science and web development concepts, and have dedicated a lot of my
          free time to apply these in personal and academic projects.
        </Paragraph>

        <Box
          as="ul"
          css={{
            color: '$slate12',
            listStyle: 'none',
            display: 'grid',
            gap: 10,
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
          }}>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Git</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Prisma</li>
        </Box>
      </Section>

      <Section id="projects">
        <Subtitle>Projects</Subtitle>
        <Paragraph css={{ marginBottom: '3rem' }}>
          I like to always have a project in mind to keep learning and
          challenging myself, learning new technologies and improving my design
          skills.
          <br />
          <br />
          These are case studies of the most relevant work I&apos;ve done.
        </Paragraph>

        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: 48
          }}>
          <CaseStudy
            options={{
              src: RickAndMorty,
              priority: true
            }}
            href="/project/rickandmorty"
            title="Rick and Morty"
            description="A web app that allows you to search for characters, locations or episodes from the Rick and Morty TV show."
          />
          <CaseStudy
            options={{
              src: Basement
            }}
            href="/project/basement"
            title="Basement Challenge"
            description="Responsive e-commerce website implemented from a Figma design file."
          />
        </Box>
      </Section>

      <Section>
        <Box css={{ textAlign: 'center', marginY: 24 }}>
          <NextLink href="/contact" passHref>
            <Link
              css={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 12
              }}>
              <Subtitle css={{ fontSize: 32, marginBottom: 1 }}>
                Contact
              </Subtitle>
              <PaperPlane />
            </Link>
          </NextLink>
        </Box>
      </Section>
    </div>
  );
};

export default Home;
