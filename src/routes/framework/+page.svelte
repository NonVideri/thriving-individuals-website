<script>
	import Header from '$lib/Header.svelte';
	import List from '$lib/List.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Section from '$lib/Section.svelte';
	import Link from '$lib/Link.svelte';
	import TopSeparator from '../../lib/TopSeparator.svelte';

	const DISCIPLINES = [
		{
			title: 'Inner Freedom',
			description:
				'mental health, dealing with stress & trauma, emotional intelligence, freedom from addictions, \
        attachments, propaganda, developing virtues, living with truth and meaning.',
		},
		{
			title: 'Physical Flourishing',
			description:
				'healthy body, free from toxins, basics of physical exercise, sleep optimization, healthy diet, \
        biohacking.',
		},
		{
			title: 'Agency',
			description:
				'effective thinking, decision making and action, life optimization, attention & distraction \
        management, space management, knowledge & information management, lifehacking.',
		},
		{
			title: 'Financial Freedom',
			description:
				'wealth creation, entrepreneurship, tax optimization, investing, Blockchain, DeFi knowledge, new \
        finances.',
		},
		{
			title: 'Free Relationships',
			description:
				'healthy communication, building friendships and connection, cooperation & leadership, organic \
        organization, building local communities.',
		},
		{
			title: 'Free Families',
			description: 'parenting, freedom education, homeschooling, unschooling.',
		},
		{
			title: 'Digital Freedom',
			description:
				'computer literacy, cybersecurity & privacy, open source software (secure communication).',
		},
		{
			title: 'Security Self-Reliance',
			description: 'basic security skills, opsec, self-defense, arms, legal knowledge.',
		},
		{
			title: 'Material Independence',
			description: 'survival skills, prepping, sustainability, material resilience.',
		},
		{
			title: 'Free Movement',
			description: 'relocation, nomading, residency optimization, free cities.',
		},
	];
</script>

<TopSeparator />

<Section id="areas" isDark isVisible>
	<Header>Practical Freedom Framework</Header>
	<Paragraph>
		This is a range of skills and competences we are teaching and promoting at Thriving Individuals.
		It is meant to contain essential skills necessary to be a free & self-reliant man in the modern
		era.
	</Paragraph>
	<List items={DISCIPLINES} />
	<Paragraph class="mt-4"
		>If you like what you see, feel free to <Link href="/join" isDark>join our community</Link
		>.</Paragraph
	>
</Section>
