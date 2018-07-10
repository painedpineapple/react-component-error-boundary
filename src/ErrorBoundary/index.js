// @flow
import * as React from 'react'
import Raven from 'raven-js'
//
import Styled from './index.style'

export default class ErrorBoundary extends React.Component<
  {
    children: any,
    styles?: {}, // Emotion style object
  },
  { hasError: boolean },
> {
  state = {
    hasError: false,
  }

  componentDidCatch(error: any, info: any) {
    this.setState(() => {
      return {
        hasError: true,
      }
    })

    if (
      process.env.NODE_ENV !== 'development' &&
      typeof document !== 'undefined' &&
      error.message != 'IDontExist is not defined'
    ) {
      /* eslint-disable-next-line no-console */
      console.log('Errors sent to Raven', error, info)
      Raven.captureException(error, { extra: info })
    } else {
      /* eslint-disable-next-line no-console */
      console.error(
        'Error caught in Error ErrorBoundary. This will reported to Sentry when not in development.',
      )
    }
  }

  render() {
    const { styles, ...props } = this.props
    if (this.state.hasError) {
      return (
        <Styled
          {...props}
          data-testid="component-error-boundary"
          customStyles={styles || {}}
        >
          <div>
            <h2>Sorry, something went wrong.</h2>
            <ReportForm />
            <p>
              You can try reloading the page, or using the menu if it is
              available.
            </p>
          </div>
        </Styled>
      )
    }
    return this.props.children
  }
}

const ReportForm = () =>
  process.env.NODE_ENV !== 'development' && typeof document !== 'undefined' ? (
    <Form />
  ) : (
    <span />
  )

const Form = () => (
  <p data-testid="component-error-boundary-form">
    This error has been reported to our development team. Please{' '}
    <button onClick={() => Raven.lastEventId() && Raven.showReportDialog()}>
      click here to fill out a report.
    </button>
  </p>
)
