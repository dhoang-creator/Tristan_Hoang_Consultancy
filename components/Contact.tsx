'use client'

import { useState } from 'react'

type FormState = { name: string; email: string; org: string; message: string }
type ErrorState = Partial<Record<keyof FormState, string>>

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 11,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: 28,
        color: 'var(--silver-2)',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
      }}
    >
      <span style={{ width: 24, height: 1, background: 'var(--rule-strong)', flexShrink: 0 }} />
      {label}
    </div>
  )
}

const EMPTY_FORM: FormState = { name: '', email: '', org: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [errors, setErrors] = useState<ErrorState>({})
  const [sent, setSent] = useState(false)

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const err: ErrorState = {}
    if (!form.name.trim()) err.name = 'Required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Valid email needed'
    if (!form.message.trim() || form.message.trim().length < 12) err.message = 'A line or two, please'
    setErrors(err)
    if (Object.keys(err).length === 0) setSent(true)
  }

  const inputStyle = (field: keyof FormState): React.CSSProperties => ({
    font: 'inherit',
    fontSize: 15.5,
    padding: '13px 16px',
    borderRadius: 6,
    border: `1px solid ${errors[field] ? 'var(--accent)' : 'var(--rule-strong)'}`,
    background: 'var(--paper)',
    color: 'var(--ink)',
    outline: 'none',
    width: '100%',
  })

  const textareaStyle = (field: keyof FormState): React.CSSProperties => ({
    ...inputStyle(field),
    padding: '14px 16px',
    resize: 'vertical',
  })

  return (
    <section id="contact" style={{ padding: '120px 36px 80px', scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionEyebrow label="Get in touch — A08" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96 }}>
          {/* Left */}
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: 'clamp(36px, 4.5vw, 64px)',
                lineHeight: 1.02,
                letterSpacing: '-0.025em',
                fontWeight: 600,
                maxWidth: '14ch',
              }}
            >
              A short note is{' '}
              <span className="serif">enough.</span>
            </h2>
            <p
              style={{
                marginTop: 28,
                fontSize: 17,
                lineHeight: 1.55,
                color: 'var(--ink-mute)',
                maxWidth: '42ch',
              }}
            >
              Tell me a bit about the team, the workflow that&rsquo;s bothering you most, and any
              constraint I should know about. I read everything personally and reply within two
              working days.
            </p>

            <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 18 }}>
              {(
                [
                  ['Email',    'tristanhoang1991@gmail.com'],
                  ['Calendar', ' '],
                  ['LinkedIn', 'linkedin.com/in/dhoang-creator'],
                  ['Based in', 'Bristol, UK · GMT'],
                ] as [string, string][]
              ).map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr',
                    gap: 24,
                    paddingBottom: 14,
                    borderBottom: '1px solid var(--rule)',
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      color: 'var(--silver-2)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                    }}
                  >
                    {k}
                  </div>
                  <div style={{ fontSize: 15.5 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div
                style={{
                  padding: 48,
                  borderRadius: 8,
                  background: 'var(--paper-2)',
                  border: '1px solid var(--rule)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  minHeight: 480,
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: 'var(--silver-2)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                  }}
                >
                  Sent — A08.OK
                </div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: 32,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    fontWeight: 600,
                  }}
                >
                  Thanks, {form.name.split(' ')[0]}.
                </h3>
                <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-mute)', lineHeight: 1.55 }}>
                  I&rsquo;ll reply to <strong>{form.email}</strong> within two working days. If
                  it&rsquo;s urgent, feel free to mention it.
                </p>
                <button
                  onClick={() => { setForm(EMPTY_FORM); setErrors({}); setSent(false) }}
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: 12,
                    padding: '11px 18px',
                    border: '1px solid var(--rule-strong)',
                    borderRadius: 999,
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: 13.5,
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                noValidate
                style={{
                  padding: 32,
                  borderRadius: 8,
                  background: 'var(--paper-2)',
                  border: '1px solid var(--rule)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                }}
              >
                {/* Name */}
                <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div
                    style={{
                      fontSize: 11,
                      color: 'var(--silver-2)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                    }}
                  >
                    Your name
                    {errors.name && (
                      <span style={{ color: 'var(--accent)', marginLeft: 8, letterSpacing: 0, textTransform: 'none' }}>
                        — {errors.name}
                      </span>
                    )}
                  </div>
                  <input type="text" value={form.name} onChange={update('name')} style={inputStyle('name')} />
                </label>

                {/* Email */}
                <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div
                    style={{
                      fontSize: 11,
                      color: 'var(--silver-2)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                    }}
                  >
                    Email
                    {errors.email && (
                      <span style={{ color: 'var(--accent)', marginLeft: 8, letterSpacing: 0, textTransform: 'none' }}>
                        — {errors.email}
                      </span>
                    )}
                  </div>
                  <input type="email" value={form.email} onChange={update('email')} style={inputStyle('email')} />
                </label>

                {/* Organisation */}
                <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div
                    style={{
                      fontSize: 11,
                      color: 'var(--silver-2)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                    }}
                  >
                    Organisation (optional)
                  </div>
                  <input type="text" value={form.org} onChange={update('org')} style={inputStyle('org')} />
                </label>

                {/* Message */}
                <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div
                    style={{
                      fontSize: 11,
                      color: 'var(--silver-2)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                    }}
                  >
                    What would you like to talk about?
                    {errors.message && (
                      <span style={{ color: 'var(--accent)', marginLeft: 8, letterSpacing: 0, textTransform: 'none' }}>
                        — {errors.message}
                      </span>
                    )}
                  </div>
                  <textarea rows={4} value={form.message} onChange={update('message')} style={textareaStyle('message')} />
                </label>

                <button
                  type="submit"
                  style={{
                    marginTop: 8,
                    padding: '14px 22px',
                    border: 0,
                    borderRadius: 999,
                    background: 'var(--navy)',
                    color: 'var(--paper)',
                    fontSize: 14.5,
                    fontWeight: 500,
                    cursor: 'pointer',
                    alignSelf: 'flex-start',
                  }}
                >
                  Send note →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
