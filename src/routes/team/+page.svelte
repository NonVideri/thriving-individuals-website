<script lang="ts">
	import Header from "../../lib/Header.svelte";
	import Section from "../../lib/Section.svelte";
	import TeamMember from "./TeamMember.svelte";

  interface TeamMember {
    photo: string;
    name: string;
    originalName?: string;
    role: string;
    description: string;
  }

  const teamMembers: TeamMember[] = [
    {
      photo: "/team/christopher-mael.jpg",
      name: "Christopher Mael",
      originalName: "Krzysztof Moszyński",
      role: "Founder, President",
      description: "Life & effectiveness coach, self-improvement mentor, systemic thinker. Chris promotes personal growth as the main source of personal freedom and civilization.",
    },
  ];
</script>

<Section>
	<Header type="h1">Our Team</Header>

  <div class="flex flex-row py-4 space-x-2">
    {#each teamMembers as member}
      <TeamMember {...member} />
    {/each}
  </div>
</Section>
