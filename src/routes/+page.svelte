<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Header from '$lib/Header.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import List from '$lib/List.svelte';
	import Link from '$lib/Link.svelte';

	const VALUES = [
		{
			title: 'Freedom',
			description:
				'We respect freedom as a fundamental aspect of human nature. We strive to live and act as \
        free men, both internally and externally, making the world more free one person at a time.',
		},
		{
			title: 'Responsibility',
			description:
				'We proudly take ownership of our lives, families, businesses, and communities, to the degree \
        that we are capable of, shaping our fates and the fate of the world around us for the better.',
		},
		{
			title: 'Excellence',
			description:
				'We are not satisfied with mediocrity, but strive to grow and get better at who we are and what \
        we do every single day, extending our being and influence in the ways that we choose.',
		},
		{
			title: 'Empowerment',
			description:
				'We generously share the gift of our growth and freedom with others, who are able and willing to \
        walk a similar path of self-improvement and personal independence.',
		},
	];
</script>

<img id="home" src="/logo.png" alt="Thriving Individuals Logo" class="animate-fadeIn w-[90%]" />

<Section id="about" class="mt-4 md:mt-6 xl:mt-8">
	<Header>About Us</Header>
	<Paragraph>
		We are a global community of freedom-loving individuals, who are dedicated to personal growth,
		and the pursuit of excellence in all aspects of life.
	</Paragraph>
	<Paragraph>
		We empower free people all around the world to achieve success in their personal lives, and live
		them to the fullest, in freedom and independence.
	</Paragraph>
	<Paragraph>
		Interested? <Link href="/join">Join us</Link>.
	</Paragraph>
</Section>

<Section id="mission" isDark>
	<Header>Our Mission</Header>
	<Paragraph>
		We don't practice liberty activism, but we empower the ones who do.<br />
		Teaching free people how to be more powerful and self-reliant as individuals,<br />
		and creating sustainable foundations for free communities that can resist tyranny –<br />
		this is the mission of the Thriving Individuals.
	</Paragraph>
</Section>

<Section id="vision">
	<Header>Our Vision</Header>
	<Paragraph>
		We embrace all aspects of human flourishing and the human pursuit of virtue, growth, and
		personal excellence.
	</Paragraph>
</Section>

<Section id="values" isDark>
	<Header>Our Values — FREE</Header>
	<List items={VALUES} />
</Section>
