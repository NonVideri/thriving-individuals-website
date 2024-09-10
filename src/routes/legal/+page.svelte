<script>
	import ClipboardButton from '../../lib/ClipboardButton.svelte';
	import {
		THRIVING_INDIVIDUALS_IBAN,
		THRIVING_INDIVIDUALS_NIP,
		THRIVING_INDIVIDUALS_REGON,
	} from '../../lib/constants';
	import Header from '../../lib/Header.svelte';
	import Link from '../../lib/Link.svelte';
	import Paragraph from '../../lib/Paragraph.svelte';
	import Section from '../../lib/Section.svelte';
	import TopSeparator from '../../lib/TopSeparator.svelte';
</script>

<TopSeparator />
<Section class="items-start">
	<Header class="self-center">Legal information</Header>
	<Paragraph class="self-center">
		Thriving Individuals Foundation is a non-profit organization registered in Poland.
	</Paragraph>
	<br />
	<Paragraph isData>
		NIP: <ClipboardButton copy={THRIVING_INDIVIDUALS_NIP}
			>{THRIVING_INDIVIDUALS_NIP}</ClipboardButton
		>
	</Paragraph>
	<Paragraph isData
		>REGON: <ClipboardButton copy={THRIVING_INDIVIDUALS_REGON}
			>{THRIVING_INDIVIDUALS_REGON}</ClipboardButton
		></Paragraph
	>
	<Paragraph isData isBold class="mt-2">Banking information:</Paragraph>
	<Paragraph isData>Thriving Individuals Foundation</Paragraph>
	<Paragraph isData
		>IBAN: <ClipboardButton copy={THRIVING_INDIVIDUALS_IBAN.replace(/\s+/g, '')}
			>{THRIVING_INDIVIDUALS_IBAN}</ClipboardButton
		></Paragraph
	>
	<Paragraph isData
		>SWIFT/BIC: <ClipboardButton copy="NESBPLPW">NESBPLPW</ClipboardButton> (Nest Bank)</Paragraph
	>
	<Paragraph>See other ways to support us <Link href="/donate">here</Link>.</Paragraph>
</Section>
