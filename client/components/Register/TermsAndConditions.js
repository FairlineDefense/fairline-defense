import * as React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {ThemeProvider} from '@material-ui/core'
import theme from '../theme'
export default function TermsAndConditions(props) {
  let {openTerms, setOpenTerms} = props

  const handleClose = () => {
    setOpenTerms(false)
  }

  const descriptionElementRef = React.useRef(null)
  React.useEffect(
    () => {
      if (openTerms) {
        const {current: descriptionElement} = descriptionElementRef
        if (descriptionElement !== null) {
          descriptionElement.focus()
        }
      }
    },
    [openTerms]
  )

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={openTerms}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          Fairline Defense Terms of Service
        </DialogTitle>
        <DialogContent dividers={'paper'}>
          <DialogContentText>
            *THIS WORK PRODUCT IS NOT COMPLETED* TERMS OF SERVICE Terms of
            Service PLEASE READ THE ENTIRE DOCUMENT CAREFULLY Various provisions
            in this Membership limit when services are provided and outline what
            services will be provided. Read the entire Membership carefully to
            determine rights, duties, and what is not covered. Throughout this
            Membership, the words "you" and "your" refer to the “the member”
            shown in the Declarations. The words "we", "us" and "our" refer to
            the Fairline Defense, which is the company providing the services.
            Various words and phrases that appear in quotation marks have
            special meaning. Refer to Section V – Definitions. SECTION I –
            COVERAGES COVERAGE A – COSTS AND DAMAGES 1. Service Agreement a. We
            will hire and pay for up to $1,000,000 dollars in attorneys fees to
            ensure you are protected if you are involved in an incident where
            you are defending yourself or others in is situation that arises out
            of: An “occurrence”; or “Covered services”. b. However, the services
            apply, and we will be rendered, only if: (1) The “occurrence” or
            incident resulting in “covered services” takes place in the
            “coverage territory”; and (2) The “occurrence” or incident resulting
            in “covered services” took place during the membership and we are
            contacted about the “occurrence” before the end of the membership
            period; and (3) The “occurrence” is reported to us in writing, by
            phone, or through our mobile application] in accordance with
            paragraph B. of SECTION III – SELF-DEFENSE LIABILITY CONDITIONS; and
            (4) The insurance provided pursuant to paragraph 1.a.(2) of COVERAGE
            A – CLAIM EXPENSES AND DAMAGES applies only if the theft of the
            firearm is promptly reported to the proper authorities upon
            discovery and the “insured” was not complicit in or involved in
            promoting, soliciting, or otherwise encouraging the theft. c. Except
            as provided in paragraph B.3.a. of SECTION III – SELF-DEFENSE
            LIABILITY CONDITIONS, a “claim” by a person or organization seeking
            “damages” shall be deemed to have been made when it is received by
            the “insured”. A “claim” is deemed reported to us when we receive
            written notice of it. All “claims” for “damages” to the same person
            or organization, including “damages” claimed by any person or
            organization for care, loss of services, or death, will be deemed to
            have been made at the time the first of those claims is made against
            any “insured”. d. We will have the right and duty to defend the
            “insured” against any "claim" seeking “damages”. However, we will
            have no duty to defend the “insured” against any "claim", suit,
            demand, cause of action, or proceeding of any kind to which this
            insurance does not apply. We will have the right to assign counsel
            of our choosing to defend the “insured” against any “claim” arising
            out of an “occurrence” or incident resulting in “covered services”
            to which this insurance applies. We will not unreasonably withhold
            approval of defense counsel requested by the insured, provided that
            such counsel, in our sole judgment, has the necessary professional
            experience to defend the “claim”, agrees to operate within our
            litigation guidelines, and agrees to our usual and customary rates
            and billing guidelines. We may, at our discretion, investigate any
            "occurrence", or incident involving “covered services”, and settle
            any “claim” that may result. But: (1) The amount we will pay for
            “damages” and “claim expenses” is limited as described in SECTION II
            – LIMITS OF INSURANCE; and (2) Our obligation to perform under this
            Membership, to pay “claim expenses” and “damages”, and our right and
            duty to defend the “insured” against any “claim” seeking “damages”
            ends: (a) When the Applicable Limit of Liability shown in the
            Declarations has been exhausted in the payment of “claim expenses”
            or “damages”, or in the payment or settlement of any “claim”; or (b)
            In the event of the insured’s “conviction” of any criminal charge(s)
            caused by, arising out of, or related in any way to: i. The
            “occurrence”, or ii. The “covered services” for which Coverage under
            this Membership is being sought. No other obligation or liability to
            pay sums or perform acts or services is covered unless explicitly
            provided within paragraph 1. Insuring Agreement, of COVERAGE B –
            DEFENSE EXPENSES, or within paragraph 2. Incidental Expenses, of
            COVERAGE B – DEFENSE EXPENSES. 2. Exclusions This Membership does
            not apply to, and provides no insurance for: a. Expected or Intended
            Injury Injury or damage expected or intended from the standpoint of
            the “insured”. This exclusion does not apply to injury or damage
            resulting from an “occurrence”. b. Criminal Acts Any criminal act by
            any “insured”, including any injury or damage caused by or during
            any criminal act of any “insured”. c. Contractual Liability Any
            obligation of the “insured” due to the “insured’s” assumption of
            liability in a contract or agreement. d. Non-Insureds An “act of
            self-defense” by anyone other than a “member”. e. Employer's
            Liability Injury or damage to an "employee" of any “insured” arising
            out of and in the course of: (1) Employment by any “insured”; or (2)
            Performing duties related to the conduct of the “insured's”
            business. f. Professional Services "Damages” or “claim expenses” due
            to the rendering of or failure to render any professional service;
            or the negligent employment, investigation, supervision, or
            retention of any professional for whom any “insured” is or ever was
            responsible. This exclusion applies even if the claims against any
            “insured” allege negligence or other wrongdoing in the supervision,
            hiring, employment, training or monitoring of others by the
            “insured”. g. War Injury or damage, however caused, arising,
            directly or indirectly, out of: (1) War, including undeclared or
            civil war; (2) Warlike action by a military force, including action
            in hindering or defending against an actual or expected attack, by
            any government, sovereign or other authority using military
            personnel or other agents; or (3) Insurrection, rebellion,
            revolution, usurped power, or action taken by governmental authority
            in hindering or defending against any of these. h. Occupational Use
            (1) Any “insured’s” conduct in providing any kind of law
            enforcement, corrections, recovery, or repossession services,
            whether or not for compensation or a fee, including any injury or
            damage caused by or arising from such conduct. (2) Any “insured’s”
            conduct in providing security or safety services for compensation or
            a fee, including any injury or damage caused by or arising from such
            conduct. i. Damage To Property Damage to: (1) Property owned,
            rented, or occupied by any “insured”, including any costs or
            expenses incurred by the “insured”, or any other person,
            organization or entity, for repair, replacement, enhancement,
            restoration or maintenance of such property for any reason,
            including prevention of injury to a person or damage to another's
            property; (2) Property loaned to an “insured”; (3) Personal property
            in the care, custody or control of an “insured”. j. Electronic Data
            “Damages” or “claim expenses” arising out of the loss of, loss of
            use of, damage to, corruption of, inability to access, or inability
            to manipulate electronic data. As used in this exclusion, electronic
            data means information, facts or programs stored as or on, created
            or used on, or transmitted to or from computer software, including
            systems and applications software, hard or floppy disks, CD-ROMs,
            tapes, drives, cells, data processing devices or any other media
            which are used with electronically controlled equipment. k.
            Mysterious Disappearance “Damages” or “claim expenses” arising out
            of the unexplained or mysterious disappearance of a firearm or other
            weapon. l. Unlawful Use or Possession of Firearm Use or possession
            of a firearm or other weapon in violation of 18 U.S.C § 922 or other
            applicable federal law. COVERAGE B – DEFENSE EXPENSES 1. Insuring
            Agreement a. We will pay, up to the Defense Expense Limit shown in
            the Declarations, “defense expenses” incurred by an “insured” in
            response to or in the investigation or defense of a “law enforcement
            inquiry” involving the “insured”, or in the investigation or defense
            of a legal proceeding commenced against an “insured” in which no
            “claim” for “damages” is made against the “insured”, provided that
            such “law enforcement inquiry” or legal proceeding arises from: (1)
            An “occurrence”; or (2) “Covered services”. b. However, this
            insurance applies, and we will pay “defense expenses”, only if: (1)
            The “occurrence” or incident resulting in “covered services” takes
            place in the “coverage territory”; and (2) The “occurrence” or
            incident resulting in “covered services” occurred during the
            membership period; and (3) The “law enforcement inquiry” involving
            an “insured”, or legal proceeding in which no “claim” for “damages”
            is made against an “insured”, commenced no later than 60 days after
            the end of the membership period, or as specified in paragraph
            B.3.b. of SECTION III – SELF-DEFENSE LIABILITY CONDITIONS; and (4)
            The “law enforcement inquiry” involving an “insured”, or legal
            proceeding in which no “claim” for “damages” is made against an
            “insured”, is reported to us in writing accordance with paragraph B.
            of SECTION III – SELF-DEFENSE LIABILITY CONDITIONS. c. The insurance
            provided in paragraph 1.a.(2) of COVERAGE B – DEFENSE EXPENSES
            applies only if the theft of the firearm is promptly reported to the
            proper authorities upon discovery and the “insured” was not
            complicit in or involved in promoting, soliciting, or otherwise
            encouraging the theft. d. While we will pay “defense expenses” as
            provided in paragraphs 1.a.(1) and 1.a.(2) of COVERAGE B – DEFENSE
            EXPENSES, we shall have no duty to provide the defense of any
            “insured” in connection with any “law enforcement inquiry” or legal
            proceeding in which no “claim” for “damages” is made against an
            “insured”. e. The amount we will pay for “defense expenses” is
            limited as described in SECTION II – LIMITS OF INSURANCE. Our
            obligation to perform under this Membership, and our obligation to
            pay “defense expenses” ends: (1) When the Applicable Limit of
            Liability shown in the Declarations has been exhausted in the
            payment of “defense expenses”; or (2) With the insured’s
            “conviction” of any criminal charge(s) caused by, arising out of, or
            related in any way to: (a) The “occurrence”, or (b) The “covered
            services” for which Coverage under this Membership is sought. No
            other obligation or liability to pay sums or perform acts or
            services is covered unless explicitly provided within paragraph 1.
            Insuring Agreement, of COVERAGE A – CLAIM EXPENSES AND DAMAGES, or
            within paragraph 2. Incidental Expenses, of COVERAGE B – DEFENSE
            EXPENSES. 2. Incidental Expenses We will pay, up to the Incidental
            Expense Limit as shown in the Declarations, all reasonable and
            necessary expenses incurred by the “insured” for: a. Costs to clean
            or restore the “residence premises” of the “insured” as a result of
            an “occurrence” or incident resulting in “covered services” that are
            not covered by or are included within deductible amounts of any
            applicable homeowners membership; and b. Replacement of a firearm,
            up to its manufacturer’s suggested retail price, that has been
            confiscated as a result of an “occurrence”, provided that: (1) no
            criminal charge or indictment will be brought against, or there has
            been a dismissal or acquittal of all criminal charges or proceedings
            against, the “insured” as a result of the “occurrence”; and (2) it
            becomes reasonably certain that the firearm will not be returned to
            the “insured”. c. Miscellaneous costs incurred by an “insured”, at
            our request or at the request of the insured’s legal counsel, as a
            direct result of a “claim”, “law enforcement inquiry”, or other
            legal proceeding to which this insurance applies. These payments
            reduce the limit of insurance shown in the Declarations for “defense
            expenses”. 3. Exclusions This Membership does not apply to, and
            provides no insurance for: a. Expected or Intended Injury Injury or
            damage expected or intended from the standpoint of the “insured”.
            This exclusion does not apply to injury or damage resulting from an
            “occurrence”. b. Criminal Acts Any criminal act by any “insured”,
            including any injury or damage caused by or during any criminal act
            of any “insured”. c. Contractual Liability Any obligation of the
            “insured” due to the “insured’s” assumption of liability in a
            contract or agreement. d. Non-Insureds An “act of self-defense” by
            anyone other than an “insured”. This exclusion does not apply to
            incidents that may result in “covered services”. e. Employer's
            Liability Injury or damage to an "employee" of any “insured” arising
            out of and in the course of: (1) Employment by any “insured”; or (2)
            Performing duties related to the conduct of the “insured's”
            business. f. Professional Services "Defense expenses” due to the
            rendering of or failure to render any professional service; or the
            negligent employment, investigation, supervision, or retention of
            any professional for whom any “insured” is or ever was responsible.
            This exclusion applies even if the claims against any “insured”
            allege negligence or other wrongdoing in the supervision, hiring,
            employment, training or monitoring of others by the “insured”. g.
            War Injury or damage, however caused, arising, directly or
            indirectly, out of: (1) War, including undeclared or civil war; (2)
            Warlike action by a military force, including action in hindering or
            defending against an actual or expected attack, by any government,
            sovereign or other authority using military personnel or other
            agents; or (3) Insurrection, rebellion, revolution, usurped power,
            or action taken by governmental authority in hindering or defending
            against any of these. h. Occupational Use (1) Any “insured’s”
            conduct in providing any kind of law enforcement, corrections,
            recovery, or repossession services, whether or not for compensation
            or a fee, including any injury or damage caused by or arising from
            such conduct. (2) Any “insured’s” conduct in providing security or
            safety services for compensation or a fee, including any injury or
            damage caused by or arising from such conduct. i. Damage To Property
            Damage to: (1) Property owned, rented, or occupied by any “insured”,
            including any costs or expenses incurred by the “insured”, or any
            other person, organization or entity, for repair, replacement,
            enhancement, restoration or maintenance of such property for any
            reason, including prevention of injury to a person or damage to
            another's property; (2) Property loaned to an “insured”; (3)
            Personal property in the care, custody or control of an “insured”.
            This exclusion i. does not apply to payments under paragraph 3.
            Incidental Expenses, of SECTION I – COVERAGES. j. Electronic Data
            “Defense expenses” arising out of the loss of, loss of use of,
            damage to, corruption of, inability to access, or inability to
            manipulate electronic data. As used in this exclusion, electronic
            data means information, facts or programs stored as or on, created
            or used on, or transmitted to or from computer software, including
            systems and applications software, hard or floppy disks, CD-ROMs,
            tapes, drives, cells, data processing devices or any other media
            which are used with electronically controlled equipment. k.
            Mysterious Disappearance “Defense expenses” arising out of the
            unexplained or mysterious disappearance of a firearm or other
            weapon. l. Unlawful Use or Possession of Firearm Use or possession
            of a firearm or other weapon in violation of 18 U.S.C § 922 or other
            applicable federal law. SECTION II – LIMITS OF INSURANCE A. The
            Limits of Insurance in excess of the Each Occurrence Retention
            Amount that is subject to the Annual Aggregate Retention Amount, if
            any, shown in the Declarations, and the rules below fix the most we
            will pay regardless of the number of: 1. “Insureds”; 2. “Claims”
            made or suits brought; or 3. Persons or organizations making
            “claims” or bringing suits. B. The General Aggregate Limit is the
            most we will pay for the sum of all “claims”, “claim expenses”,
            “damages”, “defense expenses”, and Incidental Expenses, other than
            our unallocated loss adjustment expenses, covered under this
            Membership. The General Aggregate Limit is reduced by all payments
            made under this Membership. C. The Each Claim Limit is the most we
            will pay for “claim expenses” and “damages” that the insured becomes
            legally obligated to pay as a result of a “claim” arising from an
            “occurrence” or incident resulting in “covered services”. D. The
            Defense Expense Limit is the most we will pay for “defense expenses”
            incurred in the investigation and defense of a “law enforcement
            inquiry” into an “occurrence” involving an “insured” or legal
            proceedings in which no “claim” for “damages” is made against an
            “insured”. E. The Cost of Bail Bond Limit is the most we will pay
            for the cost of bail bonds associated with any criminal charge or
            proceeding against the “insured”. Any payments made under the Cost
            of Bail Bond Limit shall be subject to and shall reduce the Defense
            Expense Limit shown in the Declarations. F. The Loss of Earnings
            Limit is the most we will pay for actual per-day loss of earnings
            incurred by an “insured” because of time off from work. Any payments
            made for loss of earnings is subject to and shall reduce the Each
            Claim Limit shown in the Declarations. G. The Incidental Expense
            Limit is the most we will pay for those costs and expenses
            identified Paragraph 2. Incidental Expenses, of COVERAGE B – DEFENSE
            EXPENSES. Any payments made under Paragraph 2. Incidental Expenses,
            of COVERAGE B – DEFENSE EXPENSES shall be subject to and shall
            reduce the Defense Expense Limit shown in the Declarations. H.
            Retention 1. The “named insured” will be responsible for payment to
            us of any amounts we pay pursuant to SECTION I – COVERAGES up to the
            “Retention Limits”, if any, shown in the Declarations. We may pay
            any part or all of the retention to effect settlement of any claim
            or “suit”. Upon notification of the action taken the “named insured”
            shall promptly reimburse us for such part of the retention limit as
            has been paid by us. 2. Each Occurrence Retention Amount The Each
            Occurrence Retention Amount shown in the Declarations shall apply to
            each “occurrence”. 3. Annual Aggregate Retention Amount The Annual
            Aggregate Retention Amount stated in the Declarations shall be the
            maximum aggregate retention obligation of the “named insured” for
            all “occurrences”. The Limits of Insurance of this Membership apply
            separately to each consecutive annual period and to any remaining
            period of less than 12 months, starting with the beginning of the
            membership period shown in the Declarations, unless the membership
            period is extended after issuance for an additional period of less
            than 12 months. In that case, the additional period will be deemed
            part of the last preceding period for purposes of determining the
            Limits of Insurance. SECTION III – SELF-DEFENSE LIABILITY CONDITIONS
            A. Bankruptcy Bankruptcy or insolvency of an insured or of the
            insured's estate will not relieve us of our obligations under this
            Membership. B. Duties In The Event Of Occurrence, Incident, Claim,
            Inquiry, or Proceeding 1. As a condition precedent to your rights
            under this Membership, you must see to it that we are notified in
            writing of an "occurrence", an incident that may result in “covered
            services”, or an incident that may result or has resulted in a
            “claim”, “law enforcement inquiry” or other legal proceedings
            arising out of an “occurrence” or incident that may result in
            “covered services” as soon as practicable, but in no event later
            than: a. 60 days after the end of the membership period, or b. The
            expiration date of any applicable Extended Reporting Period. 2. To
            the extent possible, notice should include how, when and where the
            "occurrence" or incident took place, the names and addresses of any
            injured persons and witnesses, and the nature and location of any
            injury or damage or legal proceeding arising out of or related to
            the "occurrence" or incident. Notice of an "occurrence" or incident
            is not notice of a “claim”. 3. If during the membership period, the
            “insured” first becomes aware of an “occurrence”, an incident that
            may result in "covered services”, or an incident that may result in
            a “claim”, “law enforcement inquiry” or other legal proceeding and
            the “insured” provides written notice to us as specified in
            subparagraph B.2. of SECTION III – CONDITIONS, then: a. a “claim” or
            suit for “damages” arising out of such “occurrence” or incident that
            is subsequently made against the “insured” within thirty-six (36)
            months after the end of the membership period and is reported to us
            in writing within ten (10) days of the “insured” receiving notice of
            it shall be deemed to have been made at the time such written notice
            was received by us; and b. a “law enforcement inquiry” involving an
            “insured”, or legal proceeding in which no “claim” for “damages” is
            made against an “insured” arising from that “occurrence” or incident
            was initiated within thirty-six (36) months after the end of the
            membership period and is reported to us in writing within ten (10)
            days of the “insured” receiving notice of it shall be deemed to have
            commenced at the time such written notice was received by us.
            However, this Membership shall not apply to and provides no
            insurance for fees, expenses and other costs incurred, without our
            consent, prior to the time such “occurrence” or incident results in
            a “claim” or suit for “damages”, a “law enforcement inquiry”
            involving the “insured”, or a legal proceeding involving the
            “insured” in which no “claim” for “damages” is made against the
            “insured”. 4. You and any other involved “insured” must: a.
            Immediately send us copies of any demands, notices, summonses,
            charges or legal papers received in connection with the “claim”,
            “law enforcement inquiry”, or other legal proceeding; b. Authorize
            us to obtain records and other information; c. Cooperate with us in
            the investigation, defense, or settlement of the “claim”; and d.
            Assist us, upon our request, in the enforcement of any right against
            any person or organization that may be liable to the “insured”
            because of injury or damage to which this insurance may also apply.
            5. No “insured” will, except at that “insured's” own cost,
            voluntarily make a payment, assume any obligation, or incur any
            expense without our consent. C. Legal Action Against Us No person or
            organization has a right under this Membership: 1. To join us as a
            party or otherwise bring us into a "suit" asking for “damages” from
            an insured; or 2. To sue us on this Membership unless all of its
            terms have been fully complied with. A person or organization may
            sue us to recover on an agreed settlement or on a final judgment
            against an insured; but we will not be liable for “damages” that are
            not payable under the terms of this Membership or that are in excess
            of the applicable limit of insurance. An agreed settlement means a
            settlement and release of liability signed by us, the insured and
            the claimant or the claimant's legal representative. D. Other
            Insurance If other valid and collectible insurance is available to
            the “insured” for a loss we cover under this Membership, our
            obligations are limited as follows: 1. Primary Insurance This
            insurance is primary except when paragraph 2. below applies. If this
            insurance is primary, our obligations are not affected unless any of
            the other insurance is also primary. Then, we will share with all
            that other insurance by the method described in paragraph c. below.
            2. Excess Insurance a. This insurance is excess over any other valid
            and collectible insurance purchased by the “insured”, whether
            primary, excess, contingent or on any other basis, that applies to
            an “occurrence” or “covered services” to which this insurance also
            applies; b. When this insurance is excess, we will have no duty
            under this Coverage to defend the insured against any "suit" if any
            other insurer has a duty to defend the insured against that "suit".
            If no other insurer defends, we will undertake to do so, but we will
            be entitled to the insured's rights against all those other
            insurers. c. When this insurance is excess over other insurance, we
            will pay only our share of the amount of the loss, if any, that
            exceeds the sum of: 1. The total amount that all such other
            insurance would pay for the loss in the absence of this insurance;
            and 2. The total of all deductible and self-insured amounts under
            all other insurance. d. We will share the remaining loss, if any,
            with any other insurance that is not described in this Excess
            Insurance provision and was not bought specifically to apply in
            excess of the Limits of Insurance shown in the Declarations of this
            Membership. 3. Method Of Sharing If all of the other insurance
            permits contribution by equal shares, we will follow this method
            also. Under this approach each insurer contributes equal amounts
            until it has paid its applicable limit of insurance or none of the
            loss remains, whichever comes first. If any of the other insurance
            does not permit contribution by equal shares, we will contribute by
            limits. Under this method, each insurer's share is based on the
            ratio of its applicable limit of insurance to the total applicable
            limits of insurance of all insurers. E. Premium Audit 1. We will
            compute all premiums for this insurance in accordance with our rules
            and rates. 2. Premium shown for this Membership as advance premium
            is deposit premium only. At the close of each audit period we will
            compute the earned premium for that period and send notice to the
            “Named Insured”. The due date for audit and retrospective premiums
            is the date shown as the due date on the bill. If the sum of the
            advance and audit premiums paid for the membership period is greater
            than the earned premium, we will return the excess to the “Named
            Insured”. 3. The “Named Insured” must keep records of information we
            need for premium computation, and send us copies at such times as we
            may request. F. Separation Of Insureds Except with respect to the
            Limits of Insurance, and any rights or duties specifically assigned
            in this Membership to the “named insured”, this insurance applies:
            1. As if each Insured were the only Insured; and 2. Separately to
            each insured against whom a claim is made or "suit" is brought. This
            condition will not increase our limit of liability for any one claim
            or “suit”. G. Appeals In the event an insured or the insured’s other
            insurer(s) elect not to appeal a judgment for “damages”, we may, in
            our sole discretion, elect to make such appeal at our cost and
            expense and we shall be liable for the taxable costs and
            disbursements and interest incidental thereto. H. Transfer Of Rights
            Of Recovery Against Others To Us If any “insured”: has rights to
            recover all or part of any payment we have made under this
            Membership, those rights are transferred to us. The insured must do
            nothing after loss to impair them. At our request, the insured will
            bring "suit" or transfer those rights to us and help us enforce
            them. I. Recovery or Recoupment We shall have the right to seek
            recovery or recoupment from an “insured” the amount of any payments
            made to, for, or on behalf of the “insured”, including payments made
            to third parties, if it is determined that any such payments were
            made for matters not covered by this Membership or are otherwise
            prohibited by applicable law. J. When We Do Not Renew If we decide
            not to renew this Membership, we will mail or deliver to the “named
            insured” shown in the Declarations written notice of the nonrenewal
            not less than 180 days before the expiration date. If notice is
            mailed, proof of mailing will be sufficient proof of notice. K.
            Cancellation or Termination 1. This Membership may only be cancelled
            by us only for the following reasons: a. Nonpayment of premium; b.
            Material misrepresentation of fact which, if known to us, would have
            caused us not to issue the Membership; c. Substantial change in the
            risk assumed, except to the extent that: (1) We had notice of the
            risk within the first 120 days of the membership period and this is
            not a renewal or continuation of a membership we issued; or (2) We
            should reasonably have foreseen the change or contemplated the risk
            in writing the Membership; d. Substantial breaches of contractual
            duties, conditions or warranties; or e. Loss of our reinsurance
            covering all or a significant portion of the particular Membership
            insured, or where continuation of the Membership would imperil our
            solvency or place us in violation of the insurance laws of South
            Carolina. Prior to cancellation for reasons permitted in this Item
            e., we will notify the Commissioner, in writing, at least 60 days
            prior to such cancellation and the Commissioner will, within 30 days
            of such notification, approve or disapprove such action. Any notice
            of cancellation will state the precise reason for cancellation. 2.
            This Membership shall terminate at the earliest of the following: a.
            Upon expiration of the membership period stated in the Declarations;
            b. The effective date of termination specified in prior written
            notice provided to us by the “named insured”; c. 90 days after
            receipt by the “named insured” of written notice of termination from
            us; d. 10 days after receipt by the “named insured” of written
            notice of termination from us for failure to pay a premium stated in
            the Declarations when due, unless such premium is paid within such
            10 day period; or e. At such other time that is longer than the
            periods indicated above as may be agreed upon in writing by us and
            the “named insured”. L. Your Right To Claim And Occurrence or
            Incident Information We will provide the “named insured” shown in
            the Declarations the following information relating to this and any
            preceding membership we have issued to the “named insured” during
            the previous three years: 1. A list or other record of each
            "occurrence" or incident, of which we were notified in accordance
            with paragraph B. of SECTION III – SELF-DEFENSE LIABILITY
            CONDITIONS. We will include the date and a brief description of the
            "occurrence" or incident if that information was in the notice we
            received. 2. A summary, by membership year, of payments made. The
            “named insured” may not disclose this information without our prior
            written consent. If we cancel or elect to non-renew this Membership,
            upon request we will provide such information no later than 30 days
            before the date of membership termination. In other circumstances,
            we will provide this information only if we receive a written
            request from the “named insured” within 60 days after the end of the
            membership period. In this case, we will provide this information
            within 45 days of receipt of the request. We compile “claim” and
            "occurrence" or incident information for our own business purposes
            and exercise reasonable care in doing so. In providing this
            information to the “named insured”, we make no representations or
            warranties to any “named insured”, “insureds”, additional insureds,
            insurers, or others to whom this information is furnished by or on
            behalf of any “insured”. Cancellation or non-renewal will be
            effective even if we inadvertently provide inaccurate information.
            M. Changes This Membership contains all the agreements between you
            and us concerning the insurance afforded. The “named insured” shown
            in the Declarations is authorized to make changes in the terms of
            this Membership with our consent. This Membership’s terms can be
            amended or waived only by endorsement issued by us and made a part
            of this Membership. N. Premiums The “named insured” shown in the
            Declarations: 1. Is responsible for the payment of all premiums; and
            2. Will be the payee for any return premiums we pay. O. Conformity
            to Law Any terms of this Membership in conflict with the terms of
            any applicable laws pursuant to which this Membership is construed
            are hereby amended to conform to such laws. SECTION IV – EXTENDED
            REPORTING PERIOD A. We will provide an Extended Reporting Period, as
            described below, if: 1. This Membership is canceled or not renewed;
            or 2. We renew or replace this Membership with insurance that: a.
            Has a Retroactive Date later than the date shown in the Declarations
            of this Membership; or b. Does not apply to “occurrences” or
            incidents on a claims-made basis. B. The Extended Reporting Period
            does not extend the membership period or change the scope of
            Coverage provided. It applies only to “claims” for “damages" arising
            out of “occurrences” or incidents that occurred before the end of
            the membership period but not before the Retroactive Date, shown in
            the Declarations. Once in effect, the Extended Reporting Period may
            not be canceled. C. The Extended Reporting Period is automatically
            provided without additional charge. This period starts with the end
            of the membership period and lasts for ninety days with respect to
            “claims” arising from "occurrences" or incidents arising from a
            “covered services” not previously reported to us. The Extended
            Reporting Period does not apply to “claims” that are covered under
            any subsequent insurance you purchase, or that would be covered but
            for exhaustion of the amount of insurance applicable to such claims.
            The Extended Reporting Period does not alter or reduce Coverage for
            “damages” from a “claim” or for “defense expenses” that may later
            arise from an "occurrence" or incident that was timely reported to
            us in accordance with paragraph 1.b.(4) of COVERAGE A – CLAIM
            EXPENSES AND DAMAGES, or paragraph 1.b.(4) of COVERAGE B – DEFENSE
            EXPENSES. D. The Extended Reporting Period does not reinstate or
            increase the Limits of Insurance. SECTION V – DEFINITIONS A. “Act of
            self-defense” means the act of defending one’s person or others
            against an unlawful, unprovoked, and imminent threat of death or
            serious bodily harm by an aggressor, but only if: (a) any force used
            is both reasonable under the circumstances and proportionate to the
            threat, and (b) the act is permitted by applicable law. B. “Claim”
            means a demand received by any “insured”, including a suit or
            service thereof, seeking “damages”. However, “claim” shall not
            include a “law enforcement inquiry”, criminal charge, or other
            proceeding in which no “damages” are sought from an “insured”. C.
            “Claim Expenses” means 1. All expenses we incur, to investigate or
            mitigate “claims” or potential “claims” arising from an
            “occurrence”; and 2. Legal fees incurred by the insured for the
            payment of legal counsel in the investigation or defense of any
            “claim” seeking “damages”, provided that such counsel’s rates are
            reasonable and commensurate with the experience of the attorney, the
            complexity of the proceeding, and the rates typically paid in the
            jurisdiction where the proceeding is pending; and 3. All reasonable
            and necessary expenses incurred by the insured at our request to
            assist us in the investigation or defense of a “claim” seeking
            “damages”, including actual loss of earnings because of time off
            from work up to the per day Loss of Earnings Limit as shown in the
            Declarations; and 4. All court costs taxed against the “insured” in
            a “claim” or suit for “damages”. “Claims expenses” do not mean
            expenses of our salaried “employees”, salaries of any insured’s
            “employees” or either our or your office expenses. D. “Conviction”
            means the final non-appealable entry by a court of an adjudication,
            judgment, order or ruling finding a party guilty of a crime.
            However, this does not include the insured’s “conviction” for a
            conceal carry or similar law. E. "Coverage territory" means the
            United States of America (including its territories and
            possessions). F. “Covered services” means the legal liability of an
            “insured” arising out of a non-insured’s use of: 1. A stolen
            “safeguarded firearm; or 2. A firearm owned by an insured that is
            stolen from a “secured location”; or 3. A firearm owned by an
            insured that is stolen from a “secured auto”; or 4. A firearm owned
            by an insured that is taken from the “personal possession” of the
            insured in the course of a robbery. G. “Damages” means any
            compensatory sum that an “insured” becomes legally obligated to pay
            as a result of a judgment, adjudication or settlement of any
            “claim”. “Damages” includes pre-judgment and post-judgment interest.
            Unless permitted by controlling law, “Damages” shall not include
            fines, judicial sanctions, penalties, punitive and/or exemplary
            damages, or multiples of compensatory damages. “Damages” shall not
            include any amount deemed uninsurable under the law pursuant to
            which this Membership is construed. H. “Defense Expenses” means
            reasonable and necessary costs and expenses incurred by the
            “insured”, at our request or at the request of legal counsel, in
            response to or in the investigation or defense of a “law enforcement
            inquiry” involving the “insured”, or in the investigation or defense
            of a legal proceeding commenced against an “insured” in which no
            “claim” for “damages” is made against the “insured”. Such reasonable
            and necessary costs and expenses shall include legal fees incurred
            by the insured for the payment of legal counsel, provided that such
            counsel’s rates are reasonable and commensurate with the experience
            of the attorney, the complexity of the proceeding, and the rates
            typically paid in the jurisdiction where the proceeding is pending.
            “Defense expenses” include the cost of bail bonds associated with
            any criminal charge or proceeding against the “insured”. I.
            “Employee” includes a “leased worker”. “Employee” does not include a
            “temporary worker”. J. “Insured” means: 1. the “Insured
            Organization”; 2. “Employees” of the “Insured Organization”. K.
            “Insured Organization” means the “named insured” and any entity that
            has contracted to provide services to, for, or on behalf of the
            “named insured”, provided that the applicable service contract
            requires that such entity be an insured with specific reference to
            this Membership. L. “Law Enforcement Inquiry” means a lawful
            investigation or official proceeding inquiring into an actual or
            alleged violation of or failure to comply with a criminal statute.
            M. “Leased worker” means a person leased to you by a labor leasing
            firm or another employer, to perform duties related to the conduct
            of your business. “Leased worker” does not include a “temporary
            worker”. N. “Named Insured” means the entity or person identified as
            such in the Declarations. O. "Occurrence" means an “act of
            self-defense” by the insured. P. “Personal possession” means upon
            the person. Q. “Residence premises” means the permanent residence of
            an “insured”, including structures or grounds appurtenant thereto,
            and any dwelling at which the “insured” temporarily resides at the
            time of the "occurrence”. R. “Safeguarded firearm” means a firearm
            that has its operation disabled by a trigger lock, and/or breach
            lock, and/or fire mechanism detachment. S. “Secured auto” means an
            auto from which no firearm is visible from the outside and that has
            been locked or otherwise secured to prevent access to all firearms
            within that auto by parties other than the “insured”. T. “Secured
            location” means your “residence premises” or office that has been
            locked or otherwise secured to prevent access to firearms within
            such premises or office by parties other than the insured.
            “Temporary worker” means a person who is furnished to you to
            substitute for a permanent “employee” on leave or to meet seasonal
            or short-term THIS ENDORSEMENT CHANGES THE MEMBERSHIP. PLEASE READ
            IT CAREFULLY. ADDITIONAL INSUREDS – ASSOCIATION MEMBERS A. The
            definition of “insured” set forth in paragraph J. of SECTION
            V—DEFINITIONS is amended to include the following individuals as
            additional insureds: 1. “Association members”; and 2. Any individual
            who is not an “association member” but who is related by blood,
            marriage or adoption to the “association member”, or is a minor
            person in the legal custody of the “association member”, provided
            that such relative or minor person permanently resides with the
            “association member” at the “association member’s” permanent
            residence. B. The insurance afforded to such additional insureds: 1.
            Applies only to the extent permitted by law; 2. Will not be broader
            than that which is afforded to an insured under the Membership; and
            3. Applies only to the extent that the “occurrence” or incident
            resulting in “covered services” did not occur prior to the
            retroactive date shown in the Declarations, or the time from which
            the “association member” has maintained uninterrupted membership,
            whichever is later; and 4. Applies, with respect to the individuals
            specified in paragraph A.2. of this Endorsement, only to
            “occurrences” involving “acts of self-defense” by such individuals
            on or in the “residence premises” of the “association member” to
            whom such individual is related by blood, marriage or adoption or,
            if such individual is a minor, the “association member” who has
            legal custody of that individual. C. The amount we will pay on
            behalf of an additional insured for “damages”, “claim expenses”, or
            “defense expenses” is subject to and is limited as described in
            SECTION II – LIMITS OF INSURANCE, and is subject to the other terms
            and conditions of the Membership. This endorsement shall not
            increase the Limits of Insurance shown in the Declarations. D. For
            the purposes of this Endorsement, and with respect to the insurance
            afforded to the additional insureds specified in paragraph A. of
            this Endorsement, the following is added to SECTION V – DEFINITIONS:
            “Association Member” means an individual who is a member of the
            “named insured” association at the time of the “occurrence” or
            incident resulting in “covered services”, as determined by the
            “named insured’s” records and its membership agreement. E. Only for
            the purposes of this Endorsement, and with respect to the insurance
            afforded to the additional insureds specified in paragraph A. of
            this Endorsement, the definition of “residences premises” set forth
            in SECTION V—DEFINITIONS, is amended as follows: “Residence
            premises” means the permanent residence of an “association member”,
            including structures or grounds appurtenant thereto, and any
            dwelling at which the “association member” temporarily resides at
            the time of the “occurrence”. All other terms and conditions of the
            Membership remain unchanged
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
          {/* <Button onClick={handleClose} color="secondary">Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  )
}
