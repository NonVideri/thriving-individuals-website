<script lang="ts">
	import Header from '../../lib/Header.svelte';
	import Section from '../../lib/Section.svelte';
	import TeamMember from './TeamMember.svelte';

	interface TeamMember {
		photo: string;
		name: string;
		originalName?: string;
		role: string;
		description: string;
		website?: string;
	}

	const teamMembers: TeamMember[] = [
		{
			photo: '/team/christopher-mael.jpg',
			name: 'Christopher Mael',
			originalName: 'Krzysztof Moszyński',
			role: 'Founder, President',
			description:
				"Life coach, self-improvement mentor, software developer. Chris brings systemic thinking to people's lives and minds, helping them discern and overcome their limitations, utilizing his multidisciplinary knowledge and various tools of practical psychology.",
			website: 'https://christophermael.com',
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
