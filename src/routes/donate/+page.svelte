<script>
	import Header from '../../lib/Header.svelte';
	import Paragraph from '../../lib/Paragraph.svelte';
	import Section from '../../lib/Section.svelte';
	import Link from '../../lib/Link.svelte';
	import Subsection from '../../lib/Subsection.svelte';
	import CryptoWallet from './CryptoWallet.svelte';
	import {
		PUBLIC_PAYPAL_ADDRESS,
		PUBLIC_BITCOIN_ADDRESS,
		PUBLIC_MONERO_ADDRESS,
		PUBLIC_ETHEREUM_ADDRESS,
		PUBLIC_SOLANA_ADDRESS,
		PUBLIC_CARDANO_ADDRESS,
	} from '$env/static/public';

	const CRYPTO_WALLETS = [
		{
			name: 'Bitcoin',
			address: PUBLIC_BITCOIN_ADDRESS,
			logo: '/logos/bitcoin.svg',
		},
		{
			name: 'Monero',
			address: PUBLIC_MONERO_ADDRESS,
			logo: '/logos/monero.svg',
		},
		{
			name: 'Ethereum',
			address: PUBLIC_ETHEREUM_ADDRESS,
			logo: '/logos/ethereum.svg',
		},
		{
			name: 'Solana',
			address: PUBLIC_SOLANA_ADDRESS,
			logo: '/logos/solana.svg',
		},
		{
			name: 'Cardano',
			address: PUBLIC_CARDANO_ADDRESS,
			logo: '/logos/cardano.svg',
		},
	];
</script>

<Section>
	<Subsection>
		<Header type="h1">Support us</Header>
		<Paragraph>
			If you resonate with our mission, you can support us using the following means:
		</Paragraph>
	</Subsection>

	<Subsection>
		<Header type="h2">1. Bank transfer</Header>
		<Paragraph>
			<p>Thriving Individuals Foundation</p>
			<p>IBAN: PL 50 2530 0008 2060 1081 4632 0001</p>
		</Paragraph>
	</Subsection>

	{#if PUBLIC_PAYPAL_ADDRESS}
		<Subsection>
			<Header type="h2">2. PayPal</Header>
			<Paragraph>
				<p>PayPal account: <Link href={PUBLIC_PAYPAL_ADDRESS}>Link</Link></p>
				<p>(Paypal takes a 5% commission from all donations.)</p>
			</Paragraph>
		</Subsection>
	{/if}

	{#if CRYPTO_WALLETS.some(({ address }) => address)}
		<Subsection>
			<Header type="h2">3. Cryptocurrency</Header>

			{#each CRYPTO_WALLETS as { name, address, logo }}
				{#if address}
					<CryptoWallet {name} {address} {logo} />
				{/if}
			{/each}
		</Subsection>
	{/if}
</Section>
