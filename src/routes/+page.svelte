<script>
	import Input from '$lib/Input.svelte';
	import Section from '$lib/Section.svelte';
  import Header from '$lib/Header.svelte';
  import Paragraph from "$lib/Paragraph.svelte";

	let name = '';
	let email = '';
	let accepted = false;

	function handleSubmit() {
		if (accepted) {
			console.log('Name:', name, 'Email:', email);
		} else {
			alert('Please accept the terms & conditions');
		}
	}
</script>

<Section id="home">
	<img src="/logo.png" alt="Thriving Individuals Logo" class="w-3/4 mt-2.5 mb-5" />
	<Header>Join us to grow with us.</Header>
	<form class="flex flex-col space-y-8 w-3/5 max-w-md my-10" on:submit|preventDefault={handleSubmit}>
		<Input type="text" bind:value={name} placeholder="Name *" required />
		<Input type="email" bind:value={email} placeholder="Email *" required />

		<div class="checkbox-container">
			<label class="flex items-center text-lg">
				<input type="checkbox" bind:checked={accepted} class="w-5 h-5 mr-4" />
				Accept <a href="/terms-and-conditions">Terms & Conditions</a>
			</label>
		</div>

		<button
			type="submit"
			class="px-6 py-4 text-lg border-none rounded-md bg-gray-800 text-white cursor-pointer font-bold hover:bg-gray-700 transition-all duration-300"
			>Subscribe</button
		>
	</form>
  <Paragraph type="small">We only send a monthly newsletter with the most important information. We will never spam you.</Paragraph>
</Section>

<Section id="about">
	<Header>About Us</Header>
	<Paragraph>We are a self-improvement initiative for free people. We empower freedom-loving people all around the world to achieve success in their personal lives, and live them to the fullest, in freedom and independence.</Paragraph>
  <Paragraph>We embrace all aspects of human flourishing and the human pursuit of virtue, growth, and personal excellence.</Paragraph>
  <Paragraph>For more details, see our <a href="#areas">areas of interest</a>.</Paragraph>
</Section>

<Section id="mission">
	<Header>Our Mission</Header>
	<Paragraph></Paragraph>	
</Section>

<Section id="vision">
	<Header>Our Vision</Header>
	<Paragraph></Paragraph>	
</Section>

<Section id="values">
	<Header>Our Values — FREE</Header>
  <ol>
    <li><b>Freedom</b> — We respect freedom as a fundamental aspect of human nature. We strive to live and act as free men, both internally and externally, making the world more free one person at a time.</li>
    <li><b>Responsibility</b> — We proudly take ownership of our lives, families, businesses, and communities, to the degree that we are capable of, shaping our fates and the fate of the world around us for the better.</li>
    <li><b>Excellence</b> — We are not satisfied with mediocrity, but strive to grow and get better at who we are and what we do every single day, extending our being and influence in the ways that we choose.</li>
    <li><b>Empowerment</b> — We generously share the gift of our growth and freedom with others, who are able and willing to walk a similar path of self-improvement and personal independence.</li>
  </ol>
</Section>

<Section id="areas">
	<Header>Practical Freedom Framework</Header>
	<Paragraph>This is a range of skills and competences we are teaching and promoting at Thriving Individuals. It is meant to contain essential skills necessary to be a free & self-reliant man in the modern era.</Paragraph>
  <ol>
    <li><b>Inner Freedom</b> — mental health, dealing with stress & trauma, emotional intelligence, freedom from addictions, attachments, propaganda, developing virtues, living with truth and meaning.</li>
    <li><b>Physical Flourishing</b> — healthy body, free from toxins, basics of physical exercise, sleep optimization, healthy diet, biohacking.</li>
    <li><b>Agency</b> — effective thinking, decision making and action, life optimization, attention & distraction management, space management, knowledge & information management, lifehacking.</li>
    <li><b>Financial Freedom</b> — wealth creation, entrepreneurship, tax optimization, investing, Blockchain, DeFi knowledge, new finances.</li>
    <li><b>Free Relationships</b> — healthy communication, building friendships and connection, cooperation & leadership, organic organization, building local communities.</li>
    <li><b>Free Families</b> — parenting, freedom education, homeschooling, unschooling.</li>
    <li><b>Digital Freedom</b> — computer literacy, cybersecurity & privacy, open source software (secure communication).</li>
    <li><b>Security Self-Reliance</b> — basic security skills, opsec, self-defense, arms, legal knowledge</li>
    <li><b>Material Independence</b> — survival skills, prepping, sustainability, material resilience</li>
    <li><b>Free Movement</b> — relocation, nomading, residency optimization, free cities</li>
  </ol>
	<Paragraph>Interested? <a href="#home">Join us today.</a></Paragraph>
</Section>

<Section id="team">
	<Header>Our Team</Header>
	<Paragraph>Details about team members...</Paragraph>
</Section>
