// Script for the domestic geographic name change form

console.log("survey.js()  starting survey.js() ... ")

// ------------------------------------
// Elastic IP Address of EC2 Instance
// ------------------------------------
ec2ServerURL = 'http://44.207.170.49'

// Import React Hook Form for survey creation
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useForm } from 'react-hook-form';

const onSubmit = async (data) => {
    // Send POST request to server-side endpoint
    const response = await fetch('/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
)};

const geonameSurvey = () => {
  const { register, handleSubmit } = useForm();
  const [showHonoreeDetails, setShowHonoreeDetails] = useState(false);
  const [showWildernessDetails, setShowWildernessDetails] = useState(false);
  const [showNativeAmericanDetails, setShowNativeAmericanDetails] = useState(false);
  const [showLocalOppositionDetails, setShowLocalOppositionDetails] = useState(false);
  const [showCompleterDetails, setShowCompleterDetails] = useState(false);
  const onSubmit = (data) => console.log(data);

  const options = [
    'Arch', 
    'Area', 
    'Arroyo',
    'Bar',
    'Basin',
    'Bay',
    'Beach',
    'Bench',
    'Bend',
    'Canal',
    'Cape',
    'Cave',
    'Channel',
    'Cliff',
    'Crater',
    'Crossing',
    'Falls',
    'Flat',
    'Gap',
    'Glacier',
    'Gut',
    'Island',
    'Isthmus',
    'Lake',
    'Lava',
    'Levee',
    'Locale',
    'Pillar',
    'Plain',
    'Populated Place',
    'Range',
    'Rapids',
    'Reservoir',
    'Ridge',
    'Sea',
    'Slope',
    'Spring',
    'Stream',
    'Summit',
    'Swamp',
    'Valley',
    'Woods']; // Define options

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        {/* ShortText question */}
        <label>
        What is the proposed name of the feature?
        <input type="text" {...register("proposedName")} />
        </label>

        {/* Yes/No question */}
        <label>
        Is the proposed name currently in local use?
        <input type="checkbox" {...register("currentLocalName")} />
        </label>

        {/* Number question */}
        <label>
        What is the location of the feature?
        <div>
            Latitude: <input type="number" {...register("latitude")} />
        </div>
        <div>
            Longitude: <input type="number" {...register("longitude")} />
        </div>
        </label>

        {/* Yes/No question */}
        <label>
            Is this a proposal to change an existing name?
            <input type="checkbox" {...register("existingName")} />
        </label>

        {/* Conditional rendering based on "existingName" value */}
        {existingName === false && ( // Check for "false" explicitly
            <>
            {/* ShortText question */}
            <label>
                What is the address of the feature?
                <input type="text" {...register("featureAddress")} />
            </label>
            
            {/* ShortText question */}
            <label>
                Public Land Survey System
                 <input type="text" {...register("surveySystem")} />
            </label>
            </>
            )}

        {existingName === true && ( // Check for "true" explicitly
                <>
            {/* ShortText question (show only when existingName is true) */}
            <label>
                What is the GNIS Name of the feature?
                <input type="text" {...register("gnisName")} />
            </label>
            {errors.gnisName && <span>{errors.gnisName.message}</span>} {/* Display error message if applicable */}

            {/* Number question (show only when existingName is true) */}
            <label>
                What is the GNIS ID of the feature?
                <input type="number" {...register("gnisID")} />
            </label>
            {errors.gnisID && <span>{errors.gnisID.message}</span>} {/* Display error message if applicable */}
                </>
             )}


        <label>
            What is the Feature Type?
            <select {...register("featureType")}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                {option}
                </option>
            ))}
            </select>
        </label>

        {/* ShortText question */}
        <label>
            Please provide a description of the feature.
            <input type="text" {...register("featureDescription")} />
        </label>

        {/* ShortText question */}
        <label>
            Please provide relevant information about the proposed name, such as origin, meaning, how long it has been in current use, as well as current or historical significance. Also include why you believe the feature requires a name or name change and why the proposed name is appropriate. Describe any documents that you will be submitting to support your proposal.
            <input type="text" {...register("nameDetails")} />
        </label>

        {/* Yes/No question */}
        <label>
            Please provide any supporting documentation about the proposed name, including any web links.
            <input type="file" accept=".pdf,.doc,.docx" {...register("supportingDocument")} />
        </label>

        {/* Yes/No question */}
        <label>
            Is the name commemorative? Does the name honor or refer to a person or persons?
            <input type="checkbox" {...register("commemorative")} onChange={(e) => setShowHonoreeDetails(e.target.checked)} />
        </label>

        {showHonoreeDetails && (
            <>
            {/* ShortText question */}
            <label>
                What is the honoree's full name?
                <input type="text" {...register("honoreeName")} />
            </label>

            {/* Date question */}
            <label>
                What is the honoree's date of birth?
                <input type="date" {...register("honoreeDOB")} />
            </label>

            {/* Date question */}
            <label>
                What is the honoree's date of death?
                <input type="date" {...register("honoreeDOD")} />
            </label>

            {/* ShortText question */}
            <label>
                Please provide a short biography and significance or association with the geographic feature.
                <input type="text" {...register("honoreeBio")} />
            </label>
            </>
        )}

        {/* Yes/No question */}
        <label>
            Is the feature in a Wilderness Area or Wilderness Study Area?
            <input type="checkbox" {...register("wilderness")} onChange={(e) => setShowWildernessDetails(e.target.checked)} />
        </label>

        {showWildernessDetails && (
            <>
            {/* ShortText question */}
            <label>
                Please provide your justification for making an exception to the Wilderness Policy. Please note that the BGN will not approve new names for unnamed features within wilderness areas or wilderness study areas, unless an overriding need can be demonstrated by the proponent.
                <input type="text" {...register("wildernessDescription")} />
            </label>
            </>
        )}

        {/* Yes/No question */}
        <label>
            Is the name you are proposing intended to honor Native Americans, their language, or culture?
            <input type="checkbox" {...register("honorNativeAmerican")} onChange={(e) => setShowNativeAmericanDetails(e.target.checked)} />
        </label>

        {showNativeAmericanDetails && (
            <>
            {/* ShortText question */}
            <label>
            Please indicate below, or in documentation submitted separately – with this proposal or any time after the proposal is submitted – any efforts to solicit Tribal input.
                <input type="text" {...register("tribalInput")} />
            </label>
            </>
        )}

        {/* Yes/No question */}
        <label>
            Is there any local opposition or conflict with the proposed name?
            <input type="checkbox" {...register("localOpposition")} onChange={(e) => setShowLocalOppositionDetails(e.target.checked)} />
        </label>

        {showLocalOppositionDetails && (
            <>
            {/* ShortText question */}
            <label>
                Please explain and describe any opposition.
                <input type="text" {...register("oppositionDetails")} />
            </label>
            </>
        )}

        {/* ShortText question */}
        <label>
            Please provide any additional notes about the proposed name that you did not include in response to any of the previous questions.
            <input type="text" {...register("additionalDetails")} />
        </label>

        {/* Yes/No question */}
        <label>
            Are you completing this form for someone else?
            <input type="checkbox" {...register("otherComplete")} onChange={(e) => setShowCompleterDetails(e.target.checked)} />
        </label>

        {showCompleterDetails && (
            <>
            {/* ShortText question */}
            <label>
                Please provide your name.
                <input type="text" {...register("completerName")} />
            </label>
            {/* Email question */}
            <label>
                Please provide your email address.
                <input type="email" {...register("completerEmail")} />
            </label>
            {/* ShortText question */}
            <label>
                Please provide your mailing address.
                <input type="text" {...register("completerAddress")} />
            </label>
            {/* Telephone question */}
            <label>
                Please provide your telephone number.
                <input type="tel" {...register("completerPhone")} />
            </label>
            </>
        )}

        {/* ShortText question */}
        <label>
            What is the name of the proponent?
            <input type="text" {...register("proponentName")} />
        </label>
        {/* ShortText question */}
        <label>
            Please provide the agency or organization of the proponent, if applicable.
            <input type="text" {...register("proponentOrg")} />
        </label>
        {/* Email question */}
        <label>
            Please provide the email address of the proponent.
            <input type="email" {...register("proponentEmail")} />
        </label>
        {/* ShortText question */}
        <label>
            Please provide the mailing address of the proponent.
            <input type="text" {...register("proponentAddress")} />
        </label>
        {/* Telephone question */}
        <label>
            Please provide the telephone number (including area code) of the proponent.
            <input type="tel" {...register("proponentPhone")} />
        </label>

      <button type="submit">Submit</button> 
    </form>
  );
};

//Not sure if I need this root here on this script or in survey.html
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<geonameSurvey />);
export default geonameSurvey;