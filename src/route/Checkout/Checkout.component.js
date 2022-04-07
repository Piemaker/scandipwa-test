import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper';
import {
    Checkout as SourceCheckout,
} from 'SourceRoute/Checkout/Checkout.component';

export class Checkout extends SourceCheckout {
    render() {
        console.log(this.stepMap)
    return (
        <main block="Checkout">
            
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
          >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
   
};

export default Checkout;
