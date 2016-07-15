# blockscore-id-doc-types

JSON map of [Blockscore](https://docs.blockscore.com) supported IDV document types

## Fields

* **postalCode** - Whether postal code is required for that document type
* **supportedDocuments** - Array of supported document types
  * **ssn** -	Social Security Number (Full 9 or last 4)
  * **drivers_license** - Driver's license
  * **personal_identification** - Personal Identification (PIN)
  * **identity_card** -	Identity Card
  * **tax_id** - Tax ID
  * **voter_id** - Voter ID
  * **travel_document** -	Travel Document
  * **residence_permit** - Residence Permit
  * **identity_certificate** - Identity Certificate
  * **passport** - Passport

See: [https://docs.blockscore.com/v4/node/#documents](https://docs.blockscore.com/v4/node/#documents)
