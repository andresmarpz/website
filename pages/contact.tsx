import Box from '@/ui/Box';
import Paragraph from '@/ui/Paragraph';
import { css, keyframes, styled } from '@/stitches.config';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import CheckIcon from '@/ui/svg/CheckIcon';

import * as Checkbox from '@radix-ui/react-checkbox';
import { lime, red, violet } from '@radix-ui/colors';
import Spinner from '@/ui/svg/Spinner';
import getActivity from '@/lib/activity';
import TitleStyle from '@/ui/TitleStyle';

const Title = styled('h1', TitleStyle, {
	fontSize: 24
})

const opacityIn = keyframes({
    '0%': {
        opacity: 0
    },
    '100%': {
        opacity: 1
    }
});

const StyledForm = styled('form', {
    position: 'relative',
    border: '1px solid $slate5',
    borderRadius: 4,
    padding: 24
});

const FieldSet = styled('fieldset', {
    all: 'unset',
    display: 'flex',
    flexDirection: 'column',
    gap: 8
});

const FlexColumn = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
});

const StyledLink = styled('a', {
    textDecoration: 'none',
    color: '$slate12',
    fontWeight: 500,

    '&:hover': {
        textDecoration: 'underline'
    }
});

const StyleInput = css({
    border: '1px solid $slate5',
    borderRadius: 4,
    padding: '8px 12px',
    fontSize: '16px',
    fontWeight: 400,
    color: '$slate12',
    backgroundColor: '$gray1'
});

const StyledInput = styled('input', StyleInput);
const StyledTextArea = styled(
    'textarea',
    {
        resize: 'none',
        overflowY: 'auto',
        fontFamily: 'inherit'
    },
    StyleInput
);

const StyledLabel = styled('label', {
    color: '$slate12'
});

const StyledCheckbox = styled(Checkbox.Root, {
    all: 'unset',
    backgroundColor: 'white',
    width: 25,
    height: 25,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid $slate5',
    '&:hover': { backgroundColor: '$slate1' },
    '&:focus': { boxShadow: `0 0 0 2px black` }
});

const StyledIndicator = styled(Checkbox.Indicator, {
    color: violet.violet11,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const Button = styled('button', {
    color: 'white',
    backgroundColor: '$slate12',
    minWidth: 100,
    maxWidth: '50%',
    height: 40,
    borderRadius: 4,
    padding: '6px 12px',
    fontSize: 16,
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    '&:disabled': {
        cursor: 'not-allowed'
    },
    '&:focus': {
        outline: 'none',
        boxShadow: `0 0 0 2px $slate12`
    }
});

const Label = styled('label', {
    color: '$slate12',
    fontSize: 15,
    lineHeight: 1,
    userSelect: 'none'
});

const Alert = styled('div', {
    color: '$slate12',
    position: 'absolute',
    inset: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 4,
    minWidth: 'max-content',
    maxWidth: '80%',
    minHeight: 'fit-content',
    padding: 8,
    zIndex: 2,
    animation: `${opacityIn} 0.5s ease`,

    variants: {
        type: {
            success: {
                backgroundColor: lime.lime4,
                border: `1px solid ${lime.lime6}`
            },
            error: {
                backgroundColor: red.red5,
                border: `1px solid ${red.red7}`
            }
        }
    }
});

// Exports
const CheckboxRoot = StyledCheckbox;
const CheckboxIndicator = StyledIndicator;

function useForceUpdate(){
    const { 1: setValue } = useState(0);
    return () => setValue(value => value + 1);
}

const Contact: NextPage = () => {
	const [mounted, setMounted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

	const forceUpdate = useForceUpdate();

	useEffect(() => {
		if(!mounted) setMounted(true);

		let interval: NodeJS.Timeout;
		if(mounted)
			interval = setInterval(() => {
				forceUpdate();
			}, 15000)

		return () => clearInterval(interval)
	}, [forceUpdate, mounted])

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setLoading(true);

        const test = await fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                message,
                notify: checked
            })
        });

        setLoading(false);
        if (!test.ok) setError(true);
        else setSuccess(true);
    }

    return (
        <div>
            <Title>Let&apos;s Talk 👋</Title>
            <Paragraph>
                Don&apos;t hesitate to contact me if you have a question,
                proposal, or just want to have a chat, I&apos;d love to hear
                from you!
                <br />
                <br />
                You can leave me a message below, find me on{' '}
                <StyledLink
                    href="https://twitter.com/andresmarpz"
                    target="_blank"
                    rel="noreferrer">
                    Twitter
                </StyledLink>{' '}
                /{' '}
                <StyledLink
                    href="https://linkedin.com/in/andresmarpz"
                    target="_blank"
                    rel="noreferrer">
                    LinkedIn
                </StyledLink>
                , or email me at{' '}
                <Box as="b" css={{ fontWeight: '500' }}>
                    andresmarpz@gmail.com
                </Box>
            </Paragraph>

            <Box css={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Box>
					It&apos;s currently {getActivity(new Date()).time} in Uruguay 🇺🇾 
					— so I&apos;m probably <em>{getActivity(new Date()).activity}</em>. 
					I&apos;ll get back to you as soon as possible!				
				</Box>
                <StyledForm onSubmit={handleSubmit} spellCheck="false">
                    <FieldSet disabled={success || error}>
                        <Box
                            css={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 8,

                                '@xsm': {
                                    flexDirection: 'row',
                                    gap: 16,
                                    '& > div': {
                                        flexGrow: 1
                                    }
                                }
                            }}>
                            <FlexColumn>
                                <StyledLabel
                                    htmlFor="name"
                                    onClick={(e) => e.preventDefault()}>
                                    Name
                                </StyledLabel>
                                <StyledInput
									required
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                />
                            </FlexColumn>

                            <FlexColumn>
                                <StyledLabel
                                    htmlFor="email"
                                    onClick={(e) => e.preventDefault()}>
                                    Email
                                </StyledLabel>
                                <StyledInput
									required
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                            </FlexColumn>
                        </Box>

                        <FlexColumn>
                            <StyledLabel
                                htmlFor="message"
                                onClick={(e) => e.preventDefault()}>
                                Message
                            </StyledLabel>
                            <StyledTextArea
								required
                                name="message"
                                id="message"
                                cols={30}
                                rows={5}
                                value={message}
                                onChange={(event) =>
                                    setMessage(event.target.value)
                                }
                            />
                        </FlexColumn>

                        <Box
                            css={{
                                display: 'flex',
                                justifyContent: 'space-between',
								paddingTop: 16,
                            }}>
                            <Box
                                css={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8
                                }}>
                                <CheckboxRoot
                                    id="notifycb"
                                    checked={checked}
                                    onCheckedChange={(value) =>
                                        setChecked(
                                            value === 'indeterminate'
                                                ? false
                                                : value
                                        )
                                    }>
                                    <CheckboxIndicator>
                                        <CheckIcon />
                                    </CheckboxIndicator>
                                </CheckboxRoot>
                                <Label htmlFor="notifycb">Notify me</Label>
                            </Box>
                            <Button type="submit" disabled={loading}>
                                {loading ? (
                                    <Spinner width={24} height={24} />
                                ) : error ? (
                                    'Error'
                                ) : (
                                    'Send'
                                )}
                            </Button>
                        </Box>
                    </FieldSet>
                    {(error || success) && (
                        <Box
                            css={{
                                position: 'absolute',
                                borderRadius: 4,
                                inset: 0,
                                backgroundColor: 'rgba(200, 200, 200, 0.2)',
                                zIndex: 1,
                                animation: `${opacityIn} 0.5s ease`
                            }}></Box>
                    )}
                    {error && (
                        <Alert type="error">
                            Something went wrong. Please try again later.
                        </Alert>
                    )}
                    {success && (
                        <Alert type="success">Message sent. Thank you!</Alert>
                    )}
                </StyledForm>
            </Box>
        </div>
    );
};

export default Contact;
