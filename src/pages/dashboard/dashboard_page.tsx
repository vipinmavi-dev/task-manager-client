import React from "react"
import Style from "./dashboard_page.module.css"

function DashboardPage() {
    return (
        <div>
            <header className={Style.siteHeader}>
                <nav className={Style.navbar}>

                    <a href="/" className={Style.brand}>
                        <span className={Style.brandIcon}>
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="3"
                                    y="3"
                                    width="18"
                                    height="18"
                                    rx="2"
                                    stroke="white"
                                    stroke-width="2"
                                />

                                <path
                                    d="M7 12L10.5 15.5L17 8.5"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>

                        <span className={Style.brandName}>Task Hub</span>
                    </a>

                    {/* <!-- Navigation actions --> */}
                    <div className={Style.navActions}>
                        <a href="/auth/login" className={Style.signIn}>
                            <span className={Style.signInIcon}>
                                {/* <!-- icon --> */}
                            </span>
                            <span>Sign in</span>
                        </a>

                        <a href="/auth/signup" className={Style.getStarted}>
                            Create free account
                        </a>
                    </div>

                </nav>
            </header>

            <main>

                {/* <!-- =========================
             Hero Section
        ========================== --> */}

                <section className={Style.hero}>

                    <div className={Style.heroContent}>

                        <div className={Style.heroBadge}>
                            <span className={Style.badgeIcon}>⚡</span>
                            <span>Simple. Fast. Focused.</span>
                        </div>

                        <h1>
                            Manage tasks,
                            <span>not the chaos.</span>
                        </h1>

                        <p className={Style.heroDescription}>
                            Task Hub keeps your work organised with priorities,
                            statuses, and progress tracking — all in one clean view.
                        </p>

                        <div className={Style.heroActions}>

                            <a href="/list" className={Style.primaryButton}>
                                Try it free
                                <span>→</span>
                            </a>

                            <a href="/auth/signup" className={Style.secondaryLink}>
                                Create a free account →
                            </a>

                        </div>

                        <p className={Style.heroNote}>
                            No account needed to try · Data saved when you sign up
                        </p>

                    </div>


                    {/* <!-- =========================
                 Features
            ========================== --> */}

                    <div className={Style.features}>

                        {/* <!-- Feature 1 --> */}
                        <article className={Style.featureCard}>

                            <div className={Style.featureIcon}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 11l2 2 4-4"></path>
                                    <path d="M5 6h14"></path>
                                    <path d="M5 12h2"></path>
                                    <path d="M5 18h2"></path>
                                    <path d="M11 18h8"></path>
                                </svg>
                            </div>

                            <h2>Track everything</h2>

                            <p>
                                Create, update, and close tasks with statuses
                                like In Progress, Delayed, and Done.
                            </p>

                        </article>


                        {/* <!-- Feature 2 --> */}
                        <article className={Style.featureCard}>

                            <div className={Style.featureIcon}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M4 19V5"></path>
                                    <path d="M4 19h17"></path>
                                    <path d="M8 16v-5"></path>
                                    <path d="M12 16V8"></path>
                                    <path d="M16 16v-9"></path>
                                </svg>
                            </div>

                            <h2>See your progress</h2>

                            <p>
                                At-a-glance stats show exactly where your work
                                stands at any moment.
                            </p>

                        </article>


                        {/* <!-- Feature 3 --> */}
                        <article className={Style.featureCard}>

                            <div className={Style.featureIcon}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path>
                                    <path d="M10 21h4"></path>
                                </svg>
                            </div>

                            <h2>Priority levels</h2>

                            <p>
                                Mark tasks High, Medium, or Low so you always
                                know what needs attention first.
                            </p>

                        </article>


                        {/* <!-- Feature 4 --> */}
                        <article className={Style.featureCard}>

                            <div className={Style.featureIcon}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                                </svg>
                            </div>

                            <h2>Fast &amp; simple</h2>

                            <p>
                                No learning curve. Add a task in seconds and
                                get back to what matters.
                            </p>

                        </article>

                    </div>

                </section>


                {/* <!-- =========================
             CTA Section
        ========================== --> */}

                <section className={Style.cta}>

                    <div className={Style.ctaContent}>

                        <h2>Ready to get organised?</h2>

                        <p>
                            Create your free account and start managing tasks in seconds.
                        </p>

                        <div className={Style.ctaActions}>

                            <a href="/auth/signup" className={Style.ctaPrimary}>
                                Sign up — it's free
                                <span>→</span>
                            </a>

                            <a href="/list" className={Style.ctaSecondary}>
                                Continue as Guest
                            </a>

                        </div>

                    </div>

                </section>

            </main>


            {/* <!-- =========================
         Footer
    ========================== --> */}

            <footer className={Style.footer}>

                <p>
                    © 2026 Task Hub · Built for focused work
                </p>

            </footer>
        </div>
    )
}

export default DashboardPage;