import React, { Component } from "react";
import "./progressBar.scss";
export default class ProgressBar extends Component {
  ifStepHasBeenPassed = (step) => {
    const { steps, checkoutStep } = this.props;
    const checkoutStepIndex = steps.findIndex(
      (currentStep) => currentStep === checkoutStep
    );
    const stepIndex = steps.findIndex((currentStep) => currentStep === step);
    if (checkoutStepIndex >= stepIndex) {
      return true;
    } else false;
  };
  render() {
    const { steps, checkoutStep } = this.props;
    const progressArr = steps.map((step, index) => {
      if (this.ifStepHasBeenPassed(step) && index !== steps.length - 1) {
        return (
          <div
            class={`stepper-item completed ${
              checkoutStep === steps[steps.length - 1] && "stepper-item--last"
            }`}
          >
            <div class="step-counter">{index}</div>
            <div class="step-name">{step}</div>
          </div>
        );
      } else if (index === steps.length - 1) {
      } else {
        return (
          <div class="stepper-item">
            <div class="step-counter">{index}</div>
            <div class="step-name">{step}</div>
          </div>
        );
      }
    });
    return <div class="stepper-wrapper">{progressArr}</div>;
  }
}
