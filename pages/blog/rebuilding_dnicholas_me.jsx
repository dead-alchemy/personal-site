import BlogTemplate from "../../components/BlogTemplate";

const RebuildingDnicholasMe = () => {
  return (
    <BlogTemplate
      title={{
        title:
          "Rebuilding dnicholas.me: React, Markdown, and an AI Pair Programmer",
        description:
          "How I rebuilt my personal site from scratch with React, shadcn, and Cloudflare Pages - with Claude as my pair programmer the whole way through.",
        dateTime: "2026-09-20",
        humanDate: "September 20th, 2026",
        url: "rebuilding_dnicholas_me",
      }}
    >
      <p>
        Sometimes you need to blow it all up. If the saying is &quot;if it
        ain&apos;t broke, don&apos;t fix it,&quot; well, I broke it because I
        felt it could be better. I&apos;ve had this site for almost 5 years now
        and I haven&apos;t done much with it. I initially built it as a fun
        exercise over a weekend and have sparingly kept it updated. Last weekend
        I took the dive to rebuild it from the ground up. I went back to the
        drawing board and really wanted to use a new and novel tool to help me
        and get some more experience under my belt.
      </p>

      <h2>The Stack</h2>
      <p>
        I wanted something simple to maintain long-term, so I kept the core
        lean:
      </p>
      <ul>
        <li>
          <strong>React + shadcn/ui</strong> for the frontend. I already work
          with React-adjacent tooling day-to-day (my team at work recently moved
          to Angular, which honestly made me appreciate some of React&apos;s
          ergonomics more than I expected), and shadcn gave me a set of
          accessible, unstyled-enough components I could actually make look like{" "}
          <em>my</em> site instead of a component library demo.
        </li>
        <li>
          <strong>Cloudflare Pages for hosting.</strong> Push to the repo,
          Cloudflare builds and deploys it. Free, fast, and one less thing to
          think about.
        </li>
        <li>
          <strong>Next.js.</strong> I like Next.js as a decent framework to
          flesh out React ideas. I knew Cloudflare handled Next.js just fine,
          and it also let me play with some React ideas down the road for side
          projects.
        </li>
      </ul>
      <p>
        The goal was to remove every bit of friction between &quot;I want to
        write something&quot; and &quot;it&apos;s published.&quot; A lot of my
        past attempts at this site died because the publishing pipeline itself
        became a chore.
      </p>

      <h2>The Actual Exercise: AI Pair Programming</h2>
      <p>
        I used Claude throughout the build - not just for boilerplate, but as an
        actual pair programmer for the parts I don&apos;t touch often: getting
        shadcn themed the way I wanted, wiring up the Markdown parsing and
        routing, debugging the inevitable Cloudflare Pages build quirks.
      </p>
      <p>
        What I&apos;ve genuinely enjoyed about it isn&apos;t just &quot;it
        writes code fast.&quot; It&apos;s that I could describe a problem in
        plain language - half-formed, the way you&apos;d explain it to a
        coworker - and get back something that actually matched what I meant,
        plus a reasonable explanation of <em>why</em>. For side-project work
        especially, that&apos;s huge. I don&apos;t have a team to bounce ideas
        off of at 9pm on a Tuesday, but I can talk through a layout decision or
        a weird build error and get something useful back immediately.
      </p>
      <p>
        It didn&apos;t replace the thinking - I still made every real decision
        about structure, design, and what the site should be. But it collapsed a
        lot of the &quot;how do I do the thing I already know I want&quot; time,
        which is usually where side projects stall out for me. I know how to
        code, implement components, and style pages to make them look really
        good. I do that every day of the week already. When I&apos;m home
        building, I just want to build - not continually iterate on design and
        run my own sprints.
      </p>

      <h2>The Website Layout: Mocking Ideas with AI</h2>
      <p>
        I had a few ideas on how I wanted the website to look, but I wanted
        something a little more original. I also wanted to see how AI would take
        a stab at a total redesign with some minimal input. Here I asked it for
        a few mockups on some color schemes:
      </p>
      <img
        src="/pictures/blog/rebuilding-website/mockup-1.png"
        alt="Color scheme mockup 1"
        style={{ width: "100%" }}
      />
      <img
        src="/pictures/blog/rebuilding-website/mockup-2.png"
        alt="Color scheme mockup 2"
        style={{ width: "100%" }}
      />
      <img
        src="/pictures/blog/rebuilding-website/mockup-3.png"
        alt="Color scheme mockup 3"
        style={{ width: "100%" }}
      />
      <p>
        Pretty basic, but it gave us some great ideas. I ended up really liking
        the first picture and the third mockup. Claude, for whatever reason,
        really liked the second picture with the teal, but not sure what it was
        going for there.
      </p>
      <p>
        From here I ended up really going off the deep end and asked for a total
        redesign, something that would show off me. I explicitly asked Claude
        how it would design a website for me based on what it knew about me and
        the data it had from my published GitHub and website. It ended up with
        this:
      </p>
      <img
        src="/pictures/blog/rebuilding-website/terminal-redesign.jpg"
        alt="AI-generated terminal-themed redesign concept"
        style={{ width: "100%" }}
      />
      <p>
        It&apos;s cool, but ultimately not something I liked at all. It had some
        great ideas and implementations, but it wasn&apos;t usable whatsoever -
        it looked more like an art piece. I needed my website to be a little
        more functional, with some places I could play with and live in.
        Somewhere I could grow and experiment.
      </p>
      <p>
        Next up was the final design. I asked it again for a mockup using the
        context it had from my color schemes and requests, and it came up with
        this:
      </p>
      <img
        src="/pictures/blog/rebuilding-website/final-mockup.png"
        alt="Final website design mockup"
        style={{ width: "100%" }}
      />
      <p>
        It was pretty good! This was the final iteration. Claude wanted to stick
        some big circles and design flourishes on the home page, but I felt it
        made things look too crowded. Otherwise, this was honestly fine. Next
        was the coding!
      </p>

      <h2>Writing the Code</h2>
      <p>
        The first monumental task for Claude was upgrading the core of the
        website. I needed to move from Next.js 14 to 16, and from a very, very
        old version of Node to the most recent LTS. Claude handled the upgrade
        very well.
      </p>
      <p>
        What it didn&apos;t do well, however, was the styling update. I probably
        burned thousands of tokens moving to shadcn. Somewhere along the way,
        Claude really broke the site. It had to go backwards and sideways on the
        upgrade before it finally landed the plane with the new component
        library implementation.
      </p>
      <p>Here&apos;s the summary Claude gave me once it sorted itself out:</p>

      <h3>From Claude</h3>
      <pre>
        <code>{`shadcn/ui is now set up and working. Here's what happened, since it went sideways before landing:

shadcn setup:

Installed Tailwind CSS v4 (@tailwindcss/postcss, postcss.config.mjs), added jsconfig.json with the @/* path alias shadcn needs, and ran shadcn init (Nova preset, Radix base) - it created components.json, components/ui/button.jsx, lib/utils.js, and added its design-token CSS to styles/globals.css.
Your existing styles/globals.scss reset/typography rules still win the cascade (Tailwind's base styles sit in a lower-priority @layer), so the current site's look is untouched - Tailwind is available but nothing's been restyled yet.
Two real Next 16 regressions I found and fixed while smoke-testing every page (not shadcn's fault, but they'd have broken the site regardless):

Nav.jsx and pages/blog/index.jsx used the legacy <Link><a>...</a></Link> pattern, which Next 16 hard-errors on. Fixed by moving props onto <Link> directly.
components/index.js (the barrel file the whole codebase used for import {BlogTemplate} from "../../components") silently resolves every named export to undefined under Next 16, in both Turbopack and webpack - a genuine bundler bug with pure re-export files. I removed the barrel and switched all 11 blog pages to import BlogTemplate directly from its file. Updated CLAUDE.md to document this so it doesn't get reintroduced.
Verified: yarn build succeeds 3/3 runs, yarn lint is clean (only pre-existing <img> warnings), and all 15 routes return 200 with correct HTML (nav links, active states, and all 11 blog post links checked directly).`}</code>
      </pre>
      <p>
        The &quot;clever&quot; import updates it tried broke the whole world. Oh
        well - we live and we learn. It eventually landed and implemented the
        updated UI and component library just as we wanted!
      </p>

      <h2>Notes for Future Programmers</h2>
      <p>
        Some of the best advice I can give you is to provide a clean CLAUDE.md
        file. I liked adding a &quot;Behavior Guidelines&quot; section with
        these two directives:
      </p>
      <ul>
        <li>Keep responses brief, short, and direct.</li>
        <li>
          Avoid unnecessary preamble, filler words, or long explanations unless
          specifically asked.
        </li>
      </ul>
      <p>
        Another note: keep manual mode on! It may be tempting to let Claude do
        all the work, but when I turned that off, I saw it break everything.
        Have Claude work in small, sizable chunks at a time. Don&apos;t have it
        rewrite the whole world - one component or small group of related
        components at a time. Keep things on-brand and consistent for it.
        It&apos;s a great tool, but not a panacea for all your programming woes.
      </p>

      <h2>Final Notes</h2>
      <p>
        I have really enjoyed using Claude. I&apos;ve had it help me with
        writing, programming, and analysis at home, and it basically acts as a
        glorified administrative assistant - it preps my email and calendar from
        the night before and sends me a lovely little newsletter in the morning
        with some news articles and what my day looks like.
      </p>
      <img
        src="/pictures/blog/rebuilding-website/morning-newsletter.png"
        alt="Morning newsletter example"
        style={{ width: "100%" }}
      />
      <p>
        I&apos;ve been enjoying my time with Claude, and I&apos;d highly
        recommend it for anyone with technical skills or needs - not just as a
        general AI bot. Claude isn&apos;t a jack of all trades; it&apos;s a
        focused LLM with some really good skill sets for writing and for
        programming.
      </p>
    </BlogTemplate>
  );
};

export default RebuildingDnicholasMe;
