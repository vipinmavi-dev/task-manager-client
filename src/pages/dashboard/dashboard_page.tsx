import React from "react"
import Style from "./dashboard_page.module.css"
import { ROUTES } from "../../constants/routes.ts";
import PageHeader from "../../components/pageHeader/header/pageHeader.tsx";
// import NavButton from "../../components/pageHeader/navButton/navButton.tsx";
import { Link } from "react-router-dom";
import type { DashboardPageProps } from "../../types/dashboard.ts";

function DashboardPage({
    handleNavigate,
}: DashboardPageProps) {
    const navButtons = [
        {
            buttonText: "Sign in",
            method: ()=>handleNavigate(ROUTES.LOGIN),
            className: "signIn"
        },
        {
            buttonText: "Create free account",
            method: ()=>handleNavigate(ROUTES.SIGNUP),
            className: "getStarted"
        }
    ]
    return (
        <div>
            <PageHeader 
                siteName="Task Hub" 
                isRedirectToBackPage={false} 
                navButtonsData={navButtons}
            />

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

                            <span 
                                onClick={()=>handleNavigate(ROUTES.LIST)}
                                className={Style.primaryButton}
                            >
                                Try it free
                                <span>→</span>
                            </span>

                            <Link to={ROUTES.SIGNUP} className={Style.secondaryLink}>
                                Create a free account →
                            </Link>

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

                            <Link to={ROUTES.SIGNUP} className={Style.ctaPrimary}>
                                Sign up — it's free
                                <span>→</span>
                            </Link>

                            {/* <span to={ROUTES.LIST} className={Style.ctaSecondary}> */}
                            <span className={Style.ctaSecondary}>
                                Continue as Guest
                            </span>

                        </div>

                    </div>

                </section>

            </main>

            <footer className={Style.footer}>

                <p>
                    © 2026 Task Hub · Built for focused work
                </p>

            </footer>
        </div>
    )
}

export default DashboardPage;