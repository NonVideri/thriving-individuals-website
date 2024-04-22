<script lang="ts">
	import Input from '$lib/Input.svelte';
	import Section from '$lib/Section.svelte';
	import Header from '$lib/Header.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import List from '$lib/List.svelte';
	import Link from '$lib/Link.svelte';
	import { setAlert } from '../lib/alert.store';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

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

	const handleSubmit: SubmitFunction = ({ formData }) => {
		if (!formData.get('accepted')) {
			setAlert('Please accept the terms & conditions', 'warning');
			return;
		}

		return ({ result, update }) => {
			if (result.type === 'success') {
				setAlert('Almost there! Please check your email to confirm the subscription.', 'success');
				return update();
			}

			if (result.type === 'failure') {
				setAlert(
					`An error occurred${
						result.data ? `: ${result.data.message}` : '.'
					} Please try again later.`
				);
			}
		};
	};
</script>

<img
	id="home"
	src="/logo.png"
	alt="Thriving Individuals Logo"
	class="w-3/4 mt-12 md:mt-16 lg:mt-20" />
<Section className="mt-0 md:mt-0 xl:mt-0">
	<Paragraph type="xl">Join us to grow with us.</Paragraph>
	<form
		class="flex flex-col space-y-8 w-3/5 max-w-md my-10"
		method="POST"
		use:enhance={handleSubmit}>
		<Input type="text" name="name" placeholder="Name *" required />
		<Input type="email" name="email" placeholder="Email *" required />

		<div class="checkbox-container">
			<Paragraph>
				<label class="flex items-center">
					<input type="checkbox" name="accepted" class="w-5 h-5 mr-4" />
					Accept&nbsp;<Link href="/terms-and-conditions">Terms & Conditions</Link>
				</label>
			</Paragraph>
		</div>

		<button
			type="submit"
			class="px-6 py-4 text-lg border-none rounded-md bg-gray-800 text-white cursor-pointer font-bold hover:bg-gray-700 transition-all duration-300">
			Subscribe
		</button>
	</form>
	<Paragraph type="small">
		We only send occasional newsletters with the most important updates. We will never spam you.
	</Paragraph>
</Section>

<Section id="about">
	<Header>About Us</Header>
	<Paragraph>
		We are a self-improvement initiative for free people. We empower freedom-loving people all
		around the world to achieve success in their personal lives, and live them to the fullest, in
		freedom and independence.
	</Paragraph>
	<Paragraph>
		We embrace all aspects of human flourishing and the human pursuit of virtue, growth, and
		personal excellence.
	</Paragraph>
	<Paragraph>
		For more details, see our <Link href="/thriving-individuals-foundation-statute.pdf"
			>statute</Link
		>.
	</Paragraph>
</Section>

<Section id="mission">
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
	<Paragraph>In progress...</Paragraph>
</Section>

<Section id="values">
	<Header>Our Values — FREE</Header>
	<List items={VALUES} />
</Section>

<Section id="areas">
	<Header>Practical Freedom Framework</Header>
	<Paragraph>
		This is a range of skills and competences we are teaching and promoting at Thriving Individuals.
		It is meant to contain essential skills necessary to be a free & self-reliant man in the modern
		era.
	</Paragraph>
	<List items={DISCIPLINES} />
	<Paragraph className="mt-4">Interested? <Link href="#home">Join us today.</Link></Paragraph>
</Section>
