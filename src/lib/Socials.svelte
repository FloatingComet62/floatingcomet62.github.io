<script lang="ts">
  interface Social {
    name: string;
    icon: string;
    link: string;
  }

  const socials: Social[] = [
    {
      name: "Discord",
      icon: "Discord.svg",
      link: "https://discord.gg/5zVYTGkXYP",
    },
    {
      name: "Github",
      icon: "Github.svg",
      link: "https://github.com/FloatingComet62/",
    },
    {
      name: "LinkedIn",
      icon: "LinkedIn.svg",
      link: "https://www.linkedin.com/in/aargh-rai-40900524a/",
    },
    {
      name: "Twitter",
      icon: "Twitter.svg",
      link: "https://twitter.com/FloatingComet62",
    },
    {
      name: "Youtube",
      icon: "Youtube.svg",
      link: "https://youtube.com/@FloatingComet62",
    },
  ];
</script>

<section>
  <div class="socials">
    {#each socials as social}
      <a href={social.link}>
        <img
          width="50"
          height="50"
          src={`/Socials/${social.icon}`}
          alt={social.name}
        />
      </a>
    {/each}
  </div>
  <div>Copyright (c) 2023 FloatingComet62</div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    background-color: #202020;
    width: 100%;
    height: 20rem;
  }
  .socials {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  a {
    opacity: 50%;
  }
  a:hover {
    opacity: 100%;
  }
</style>
