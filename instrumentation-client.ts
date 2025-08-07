
import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: '/ingest',
    ui_host: 'https://us.i.posthog.com',
    capture_pageview: false // pageviews are captured manually in PostHogProvider
  });
}
