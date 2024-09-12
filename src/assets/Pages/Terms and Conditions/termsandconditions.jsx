import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900">
          Alpha Car Rental Application Terms and Conditions
        </h1>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            1. Introduction
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            Welcome to Alpha Car Rental. By using our services, including the
            use of our website or mobile application to make a booking, you
            agree to comply with and be bound by the following terms and
            conditions. These terms, together with our Privacy Policy, govern
            Alpha Car's relationship with you in relation to the car rental
            services. If you disagree with any part of these terms and
            conditions, please do not use our services.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            2. Definitions
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>"Alpha Cars," "we," "us," "our"</strong> refers to the car
              rental company operating the Alpha Car Rental Application.
            </li>
            <li>
              <strong>"Renter," "you," "your"</strong> refers to the individual
              or entity who makes a booking with Alpha Cars.
            </li>
            <li>
              <strong>"Vehicle"</strong> refers to the car or other motor
              vehicle rented through our services.
            </li>
            <li>
              <strong>"Rental Period"</strong> refers to the duration for which
              the vehicle is rented, as specified in the booking confirmation.
            </li>
            <li>
              <strong>"Booking Confirmation"</strong> refers to the written
              confirmation sent by Alpha Cars to the renter, confirming the
              rental details.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            3. Eligibility and Documentation
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            To rent a vehicle from Alpha Cars, you must meet the following
            criteria:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Age Requirement</strong>: The renter must be at least 21
              years old. Specific vehicle categories may have different age
              requirements.
            </li>
            <li>
              <strong>Driver’s License</strong>: The renter and any additional
              drivers must have a valid driver’s license issued at least one
              year prior to the rental start date. An International Driver's
              Permit (IDP) may be required for renters outside of the vehicle's
              country of registration.
            </li>
            <li>
              <strong>Identity Verification</strong>: You must provide a
              government-issued photo ID (such as a passport or national
              identity card) at the time of vehicle pick-up.
            </li>
            <li>
              <strong>Credit/Debit Card</strong>: A valid credit or debit card
              is required for payment and security deposit purposes. The card
              must be in the name of the primary renter.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            4. Booking and Reservation Process
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Booking Confirmation</strong>: Bookings are confirmed only
            after full payment is received. Alpha Cars will provide a booking
            confirmation via email or the mobile application.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Rental Charges</strong>: The rental charges include the base
            rental rate, taxes, fees, and any optional extras selected by the
            renter, such as child seats, GPS, or additional insurance.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Modifications to Booking</strong>: Any changes to the
            booking, such as date, time, vehicle type, or pick-up/drop-off
            location, are subject to availability and may incur additional
            charges.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>No Show Policy</strong>: If you fail to pick up the vehicle
            at the agreed time and location without prior notification, Alpha
            Cars reserves the right to cancel the booking without a refund.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            5. Payment and Security Deposit
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Accepted Payment Methods</strong>: Alpha Cars accepts major
            credit cards, debit cards, and approved digital payment methods.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Security Deposit</strong>: A security deposit is required at
            the time of vehicle pick-up. The amount varies depending on the
            vehicle type and rental duration. The deposit is refundable,
            provided the vehicle is returned in the same condition as rented and
            without any violations.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Refund Policy</strong>: Refunds for cancellations and
            deposits will be processed within 7-10 business days, depending on
            your bank or payment provider.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            6. Vehicle Pick-Up and Drop-Off
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Pick-Up Process</strong>: Upon arrival at the pick-up
            location, renters must present their booking confirmation, valid
            driver’s license, and credit/debit card. Additional drivers must
            also be present to show their driver’s licenses.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Vehicle Inspection</strong>: A pre-rental inspection of the
            vehicle will be conducted, and any existing damage will be noted on
            the rental agreement. The renter is responsible for verifying and
            agreeing to the vehicle’s condition before departure.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Drop-Off Process</strong>: Vehicles must be returned to the
            designated drop-off location by the agreed return time. Late returns
            may incur additional charges.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Condition of Return</strong>: The vehicle must be returned
            in the same condition as it was rented, with a full tank of fuel,
            unless otherwise agreed. Any damage, missing equipment, or excessive
            cleaning required will result in additional charges.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            7. Vehicle Usage
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Permitted Use</strong>: The vehicle may only be used for
            lawful purposes. The vehicle must not be used for racing, towing,
            off-roading, or carrying hazardous materials.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Geographical Restrictions</strong>: Vehicles may not be
            driven outside the designated geographic area without prior written
            consent from Alpha Cars.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Prohibited Conduct</strong>: The vehicle must not be driven
            by anyone not named in the rental agreement or by anyone under the
            influence of alcohol or drugs. Smoking is strictly prohibited in all
            vehicles.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Mileage Restrictions</strong>: Some rentals may have mileage
            limits. Exceeding the mileage limit may result in additional
            charges.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            8. Fuel Policy
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Full-to-Full Policy</strong>: Vehicles are provided with a
            full tank of fuel and must be returned with a full tank. Failure to
            do so will result in refueling charges plus a service fee.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Alternative Fuel Options</strong>: In some cases, a pre-paid
            fuel option may be available. This allows the renter to return the
            vehicle without refueling, but any unused fuel is non-refundable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            9. Insurance and Protection
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Basic Insurance Coverage</strong>: All rentals include basic
            insurance coverage, including third-party liability. This covers
            damages to other vehicles or property caused by the renter.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Collision Damage Waiver (CDW)</strong>: Renters may purchase
            a CDW to reduce their financial liability in case of an accident.
            The CDW does not cover damage caused by negligence, misuse, or
            breach of the rental agreement.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Personal Accident Insurance (PAI)</strong>: Optional PAI is
            available to cover medical expenses for the renter and passengers in
            the event of an accident.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Excess and Deductibles</strong>: Renters may be liable for
            an insurance excess fee, depending on the level of coverage
            selected. This amount will be specified in the rental agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            10. Damage and Loss
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Renter’s Responsibility</strong>: The renter is responsible
            for any damage to the vehicle during the rental period, regardless
            of fault. This includes damage caused by accidents, vandalism,
            weather, and other factors.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Reporting Damage</strong>: Any damage to the vehicle must be
            reported to Alpha Cars immediately. The renter must also complete an
            accident report form, if applicable.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Charges for Damage</strong>: If the vehicle is returned with
            damage, the cost of repairs, loss of use, and a damage processing
            fee will be charged to the renter’s credit/debit card.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            11. Breakdown and Roadside Assistance
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Roadside Assistance</strong>: Alpha Cars provides 24/7
            roadside assistance for mechanical failures, flat tires, lockouts,
            and other issues. Contact information for roadside assistance is
            provided in the rental agreement.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Unauthorized Repairs</strong>: Renters must not attempt to
            repair the vehicle themselves or have the vehicle repaired by a
            third party without prior authorization from Alpha Cars.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Replacement Vehicle</strong>: In the event of a breakdown
            that cannot be repaired promptly, Alpha Cars will provide a
            replacement vehicle of a similar type, subject to availability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            12. Traffic Violations and Fines
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Renter’s Responsibility</strong>: Renters are responsible
            for all traffic violations, parking fines, and toll fees incurred
            during the rental period.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Administrative Fees</strong>: Alpha Cars reserves the right
            to charge the renter for any fines or fees received after the rental
            period, plus an administration fee for processing.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Handling of Fines</strong>: If Alpha Cars pays a fine on
            behalf of the renter, the renter will be charged the full amount of
            the fine plus an administrative fee.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            13. Termination of Rental Agreement
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Right to Terminate</strong>: Alpha Cars reserves the right
            to terminate the rental agreement without notice if the renter
            violates any terms and conditions or is found to be involved in
            illegal activities.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Early Return</strong>: If the renter returns the vehicle
            early, no refund will be provided for the unused rental period.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Extension of Rental</strong>: Requests to extend the rental
            period must be made before the original return date. Extensions are
            subject to availability and additional charges.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            14. Force Majeure
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Definition</strong>: Alpha Cars shall not be liable for any
            failure or delay in performing its obligations under this agreement
            due to circumstances beyond its reasonable control, including but
            not limited to natural disasters, acts of terrorism, strikes,
            pandemics, or governmental actions.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Notification</strong>: In the event of a force majeure,
            Alpha Cars will notify the renter as soon as possible and make
            reasonable efforts to mitigate the impact on the rental.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            15. Data Protection and Privacy
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Personal Data</strong>: Alpha Cars collects and processes
            personal data in accordance with its Privacy Policy, which is
            available on our website and mobile application.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Data Sharing</strong>: Personal data may be shared with
            third-party service providers for the purpose of completing the
            rental process, such as payment processors and insurance companies.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Data Security</strong>: Alpha Cars implements appropriate
            technical and organizational measures to protect personal data
            against unauthorized access, loss, or damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            16. Intellectual Property
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Ownership</strong>: All content, logos, trademarks, and
            intellectual property associated with the Alpha Car Rental
            Application are the property of Alpha Cars or its licensors.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Restrictions</strong>: Renters may not reproduce,
            distribute, modify, or create derivative works from any content
            provided by Alpha Cars without prior written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            17. Dispute Resolution and Governing Law
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Governing Law</strong>: These terms and conditions are
            governed by and construed in accordance with the laws of the country
            in which the rental takes place.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Dispute Resolution</strong>: Any disputes arising from these
            terms will be subject to the exclusive jurisdiction of the courts of
            the country in which the rental takes place.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Arbitration</strong>: At the discretion of Alpha Cars, any
            dispute may be resolved through binding arbitration in accordance
            with the rules of a recognized arbitration institution.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            18. Miscellaneous Provisions
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Entire Agreement</strong>: These terms and conditions,
            together with the booking confirmation and any additional policies
            referenced herein, constitute the entire agreement between Alpha
            Cars and the renter.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Severability</strong>: If any provision of these terms is
            found to be invalid or unenforceable, the remaining provisions shall
            continue in full force and effect.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Waiver</strong>: No failure or delay by Alpha Cars in
            exercising any right under these terms shall constitute a waiver of
            that right.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            19. Amendments and Updates
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Right to Amend</strong>: Alpha Cars reserves the right to
            amend these terms and conditions at any time without prior notice.
            Any changes will be posted on the Alpha Car Rental Application and
            will become effective immediately.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Notification of Changes</strong>: Renters are encouraged to
            review the terms and conditions periodically to stay informed of any
            updates or changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            20. Acceptance of Terms
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            By using the Alpha Car Rental Application and booking a vehicle, you
            acknowledge that you have read, understood, and agree to be bound by
            these terms and conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            21. Special Provisions for International Rentals
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Cross-Border Rentals</strong>: Some vehicles may be eligible
            for cross-border rentals. Renters must inform Alpha Cars in advance
            and obtain written consent. Additional fees may apply.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>International Driver's License</strong>: Renters from
            outside the vehicle's country of registration must provide an
            International Driver's Permit (IDP) in addition to their domestic
            license.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Currency Exchange Rates</strong>: All payments and charges
            are processed in the local currency of the rental location. Currency
            conversion rates may apply for international cards, and Alpha Cars
            is not responsible for any exchange rate differences or fees charged
            by the card issuer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            22. Customer Support and Contact Information
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Customer Support</strong>: Alpha Cars provides customer
            support via phone, email, and live chat during business hours.
            Contact details are available on our website and mobile application.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Emergency Contact</strong>: For emergencies, such as
            accidents or breakdowns, contact our 24/7 emergency hotline provided
            in the rental agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            23. Special Offers and Promotions
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Eligibility</strong>: Special offers and promotions are
            subject to specific terms and conditions and may be available for a
            limited time only.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Non-Transferable</strong>: Discounts, vouchers, and
            promotional codes are non-transferable and cannot be redeemed for
            cash.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Changes to Promotions</strong>: Alpha Cars reserves the
            right to modify or cancel any special offer or promotion at any time
            without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            24. Customer Feedback and Complaints
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Feedback</strong>: Alpha Cars welcomes customer feedback to
            improve our services. Feedback can be submitted via our website,
            mobile application, or email.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Complaints</strong>: If you have a complaint regarding your
            rental experience, please contact our customer support team. We will
            investigate and respond to your complaint within a reasonable
            timeframe.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            25. Environmental Responsibility
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Sustainability</strong>: Alpha Cars is committed to reducing
            its environmental impact. We encourage renters to consider
            eco-friendly driving practices and offer hybrid and electric
            vehicles in our fleet.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Green Initiatives</strong>: Information about our green
            initiatives and how renters can contribute to sustainability efforts
            is available on our website and mobile application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            26. Additional Provisions
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Rental Extensions</strong>: Requests for rental extensions
            must be made in advance. Additional rental days will be charged at
            the current rate.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Lost and Found</strong>: Personal belongings left in the
            vehicle after return are the responsibility of the renter. Alpha
            Cars is not liable for any lost or stolen items.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Child Safety Seats</strong>: Child safety seats are
            available upon request and must be used in accordance with local
            laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            27. Acknowledgment of Risk
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Driving Risks</strong>: By renting a vehicle from Alpha
            Cars, you acknowledge and accept the inherent risks of driving,
            including the risk of accidents and vehicle damage.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Assumption of Liability</strong>: Renters assume full
            liability for any loss, damage, or injury caused by or resulting
            from their use of the vehicle, except as otherwise provided by law
            or these terms.
          </p>
        </section>

        {/* More sections */}
        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            28. Special Requirements and Accessibility
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Accessibility Vehicles</strong>: Alpha Cars offers vehicles
            with special accessibility features upon request. Availability may
            vary by location, and advance notice is required.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Special Requests</strong>: Special requests, such as
            additional equipment or modifications, must be made at the time of
            booking and are subject to availability and additional charges.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            29. Conclusion
          </h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            Thank you for choosing Alpha Cars for your car rental needs. We
            strive to provide a safe, reliable, and enjoyable rental experience.
            If you have any questions or need further clarification on these
            terms and conditions, please do not hesitate to contact our customer
            support team.
          </p>
          <p className="text-justify leading-relaxed mb-4 text-gray-700">
            <strong>Effective Date</strong>: These terms and conditions are
            effective as of 31-08-2024.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
