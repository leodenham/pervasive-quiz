export enum QuestionProgress {
    INCOMPLETE,
    COMPLETE
}

export type OneChoiceQuestion = {
    quiz_num:       number
    question_num:   number
    has_img:        boolean
    type:           string
    question:       string

    answer:         string
    choices:        Array<string>
}
export type OneChoiceAnswer = string

export type ManyChoiceQuestion = {
    quiz_num:       number
    question_num:   number
    has_img:        boolean
    type:           string
    question:       string

    answers:        Array<string>
    choices:        Array<string>
}
export type ManyChoiceAnswer = Array<string>

export type MatchingQuestion = {
    quiz_num:       number
    question_num:   number
    has_img:        boolean
    type:           string
    question:       string

    choices:        Array<string>
    parts:          Array<string>
    answers:        Record<string, string>
}
export type MatchingAnswer = Record<string, string>

export type Answer = OneChoiceAnswer | ManyChoiceAnswer | MatchingAnswer
export type Question = ManyChoiceQuestion | MatchingQuestion | OneChoiceQuestion

type QuestionData = Array<OneChoiceQuestion | ManyChoiceQuestion | MatchingQuestion>

type QuestionDataContainer = {
    version:        string
    questions:      QuestionData
}

export const data: QuestionDataContainer = { "version": "1.0", "questions": [ { "quiz_num": 2, "question_num": 1, "has_img": false, "question": "Match the visionary to the vision", "choices": [ "Ubiquitous Computing", "The Ultimate Display", "Man-Computer Symbiosis", "Augmenting Human Intellect", "Tangible Interaction", "Memex (interconnected knowledge)" ], "parts": [ "Vannevar Bush", "JCR Licklider", "Douglas Engelbart", "Ivan Sutherland", "Hiroshi Ishii", "Mark Weiser" ], "answers": { "Vannevar Bush": "Memex (interconnected knowledge)", "JCR Licklider": "Man-Computer Symbiosis", "Douglas Engelbart": "Augmenting Human Intellect", "Ivan Sutherland": "The Ultimate Display", "Hiroshi Ishii": "Tangible Interaction", "Mark Weiser": "Ubiquitous Computing" }, "type": "matching" }, { "quiz_num": 2, "question_num": 2, "has_img": false, "question": "\u201cIf I had asked people what they wanted, they would have said faster\u00a0horses.\u201d This apocryphal quote, often attributed to Henry Ford (though he likely never said it) is an example of which kind of thinking?", "answer": "Invention-driven design", "choices": [ "Invention-driven design", "Inquiry-driven design", "Innovation-driven design", "Curiosity-driven design" ], "type": "one_choice" }, { "quiz_num": 2, "question_num": 3, "has_img": false, "question": "Which of the following are drawbacks of inquiry-driven design?", "answers": [ "Users struggle at imagining unfamiliar futures", "Users might not know how to articulate their needs", "What users say often does not match what users do" ], "choices": [ "What users say often does not match what users do", "Users struggle at imagining unfamiliar futures", "It might result in gadgets that look cool, but are useless", "Users have nothing to add when a designer is generating ideas", "Users might not know how to articulate their needs" ], "type": "many_choice" }, { "quiz_num": 3, "question_num": 1, "has_img": false, "question": "In his critique of the field of Ubiquitous Computing, Gregory Abowd suggests that the three generations of computing identified by Mark Weiser (mainframe, personal, ubicomp) would be followed by a fourth one. What is his own vision for what this fourth generation might be?", "answer": "Humans and technology becoming indistinguishable", "choices": [ "The internet of all things", "Virtual reality for everyone", "Many computers to many users", "Humans and technology becoming indistinguishable", "The end of all technology" ], "type": "one_choice" }, { "quiz_num": 3, "question_num": 2, "has_img": false, "question": "Which of the following questions a ubicomp interaction designer could ask relate to the user's context? (select all that apply)", "answers": [ "Who is involved?", "What are they trying to achieve?", "When is this interaction taking place?", "What are they doing?", "Where are they?" ], "choices": [ "What are they trying to achieve?", "Where are they?", "Who is involved?", "What are they doing?", "When is this interaction taking place?" ], "type": "many_choice" }, { "quiz_num": 3, "question_num": 3, "has_img": false, "question": "Imagine you are designing a context-aware personal scheduling assistant embedded into a wearable device. To inform the design, you are using the Expected/Sensed/Desired framework. Match the actions to their category in the framework.", "choices": [ "Desired", "Expected", "Sensed" ], "parts": [ "The assistant to account for realistic travel times between meetings", "The user is not available when there is already an appointment in their calendar", "The user carries their phone at all times", "The assistant should minimise disruptions to the schedule unless absolutely necessary", "The calendar API gives access to the user's calendar", "The GPS tracks the phone location" ], "answers": { "The assistant to account for realistic travel times between meetings": "Desired", "The user is not available when there is already an appointment in their calendar": "Expected", "The user carries their phone at all times": "Expected", "The assistant should minimise disruptions to the schedule unless absolutely necessary": "Desired", "The calendar API gives access to the user's calendar": "Sensed", "The GPS tracks the phone location": "Sensed" }, "type": "matching" }, { "quiz_num": 4, "question_num": 1, "has_img": true, "question": "Which function would you use to capture input from the component below?", "answer": "digitalRead()", "choices": [ "digital_read()", "analogRead()", "pinMode()", "digitalRead()", "analogWrite()" ], "type": "one_choice" }, { "quiz_num": 4, "question_num": 2, "has_img": false, "question": "Which of the following lines of code would turn on an LED connected to pin 12 on an Arduino? (select all that apply)", "answers": [ "digitalWrite(12, 1);", "digitalWrite(12, HIGH);" ], "choices": [ "digitalWrite(12, ON);", "digitalWrite(12, 1);", "digitalWrite(12, HIGH);", "digitalWrite(LED_BUILTIN, HIGH);" ], "type": "many_choice" }, { "quiz_num": 4, "question_num": 3, "has_img": true, "question": "Which of the following points are connected to the orange pin labelled as A on the breadboard? (select all that apply)", "answers": [ "C" ], "choices": [ "C", "D", "B", "E" ], "type": "many_choice" }, { "quiz_num": 5, "question_num": 1, "has_img": false, "question": "You are tasked with building a circuit to dim an LED connected to a pin stored in the `ledPin` variable. Which of the following commands would set it to approximately 50% of the total brightness?", "answer": "analogWrite(ledPin, 128)", "choices": [ "analogWrite(ledPin, 500)", "analogWrite(ledPin, 0.5)", "analogWrite(ledPin, 50)", "analogWrite(ledPin, 128)" ], "type": "one_choice" }, { "quiz_num": 5, "question_num": 2, "has_img": false, "question": "In which of the following scenarios is the concept of \"chunking\" most effectively applied?", "answer": "Grouping similar tasks into a single input command", "choices": [ "Grouping similar tasks into a single input command", "Navigating a hierarchical file system", "Entering long strings of text via a keyboard", "Learning to use a new gesture-based interface", "Sequentially performing repetitive actions" ], "type": "one_choice" }, { "quiz_num": 5, "question_num": 3, "has_img": false, "question": "What is the purpose of the pinMode() function in Arduino programming?", "answer": "To set a pin as either input or output", "choices": [ "To set the pin as digital or analogue", "To delay the execution of the program", "To read the value of a digital pin", "To set a pin as either input or output" ], "type": "one_choice" }, { "quiz_num": 5, "question_num": 4, "has_img": false, "question": "What is the default state of an unconnected digital input pin on an Arduino?", "answer": "Floating (undefined)", "choices": [ "Grounded", "HIGH", "Floating (undefined)", "LOW" ], "type": "one_choice" }, { "quiz_num": 5, "question_num": 5, "has_img": false, "question": "How do you debounce a button connected to a digital input pin in an Arduino program?", "answer": "Use a delay and check the state multiple times", "choices": [ "Set the pinMode to OUTPUT", "Add a capacitor in parallel with the button", "Use analogRead() instead of digitalRead()", "Use a delay and check the state multiple times" ], "type": "one_choice" }, { "quiz_num": 6, "question_num": 1, "has_img": false, "question": "Which of the following materials are commonly used in 3d printing", "answers": [ "PLA", "ABS" ], "choices": [ "Steel", "Acrylic", "ABS", "Wood", "PLA" ], "type": "many_choice" }, { "quiz_num": 6, "question_num": 2, "has_img": false, "question": "Which of the following statements are true about 3d printing? (select all that apply)", "answers": [ "You can compensate for a large layer height by sanding the print" ], "choices": [ "It is an ideal technique for engraving designs on surfaces", "You can compensate for a large layer height by sanding the print", "Common file types for 3d models include STL, JPG, and G-Code", "Thinner layer heights are always preferable to thicker ones", "It is a subtractive manufacturing technique" ], "type": "many_choice" }, { "quiz_num": 6, "question_num": 3, "has_img": false, "question": "How could 3d printing be used in the video you just watched?", "answers": [ "Making the cage around the drone" ], "choices": [ "Making the cage around the drone", "Making the hand to be tracked", "Making the origami cube", "Printing the enclosure for the controller used by the user" ], "type": "many_choice" }, { "quiz_num": 6, "question_num": 4, "has_img": false, "question": "The idea of enabling users to grasp objects in VR is aligned with the vision of which of the following HCI visions", "answers": [ "Ishii's \"Tangible interactions\"", "Sutherland's \"The ultimate display\"" ], "choices": [ "Ishii's \"Tangible interactions\"", "Bush's \"MEMEX\"", "Weiser's \"Ubiquitous Computing\"", "Sutherland's \"The ultimate display\"" ], "type": "many_choice" }, { "quiz_num": 7, "question_num": 1, "has_img": false, "question": "Match the property to the corresponding somatosensory receptor", "choices": [ "Nociceptor", "Proprioceptor", "Mechanoreceptor", "Thermoreceptor" ], "parts": [ "Temperature", "Pressure", "Vibration", "Pain", "Limb positions" ], "answers": { "Temperature": "Thermoreceptor", "Pressure": "Mechanoreceptor", "Vibration": "Mechanoreceptor", "Pain": "Nociceptor", "Limb positions": "Proprioceptor" }, "type": "matching" }, { "quiz_num": 7, "question_num": 2, "has_img": false, "question": "Which of the following statements are true about vibrotactile feedback? (select all that apply)", "answers": [ "Cheap and easy to build in comparison to other types of haptics", "Vibration motors can generate feedback by rotating an eccentric mass" ], "choices": [ "For the user to feel vibrotactile feedback they must hold the device in their hands", "Among the properties you can directly control are Frequency, Amplitude, Waveform, and Hatch", "Vibration motors can generate feedback by rotating an eccentric mass", "Cheap and easy to build in comparison to other types of haptics" ], "type": "many_choice" }, { "quiz_num": 7, "question_num": 3, "has_img": false, "question": "Which of the following statements are true about DC motors?", "answers": [ "Their speed can be controlled by adjusting the voltage.", "They provide continuous rotation." ], "choices": [ "Their speed can be controlled by adjusting the voltage.", "They require a potentiometer measuring its position", "They are typically used for precise positioning.", "They provide continuous rotation." ], "type": "many_choice" }, { "quiz_num": 7, "question_num": 4, "has_img": false, "question": "Which statements are true about servo motors?", "answers": [ "They are commonly used in robotic arms and joints.", "They provide precise control of angular position.", "They have a built-in feedback mechanism." ], "choices": [ "They are commonly used in robotic arms and joints.", "They provide precise control of angular position.", "They are typically used for continuous rotation without position control.", "They have a built-in feedback mechanism." ], "type": "many_choice" }, { "quiz_num": 7, "question_num": 5, "has_img": false, "question": "What are the characteristics of stepper motors?", "answers": [ "They are often used in CNC machines for precision.", "They rotate in discrete steps." ], "choices": [ "They rotate in discrete steps.", "They are ideal for high-speed rotation tasks.", "They are often used in CNC machines for precision.", "They would be ideal for rotating the wheels of a remote controlled toy car", "They require a continuous feedback mechanism." ], "type": "many_choice" }, { "quiz_num": 8, "question_num": 1, "has_img": false, "question": "Which of the following can be considered context-aware systems?\n\u00a0", "answers": [ "A system that uses context to provide relevant information or services to the user", "A system that adapts its behavior based on the current environmental conditions" ], "choices": [ "A system that monitors environmental conditions", "A system that adapts its behavior based on the current environmental conditions", "A system that gathers context but doesn't act on it", "A system that reacts to user input only", "A system that uses context to provide relevant information or services to the user" ], "type": "many_choice" }, { "quiz_num": 8, "question_num": 2, "has_img": false, "question": "In FDM printing, what type of material is typically used?", "answer": "Filament (such as PLA or ABS)", "choices": [ "Metal powders", "Filament (such as PLA or ABS)", "Glass sheets", "Ceramic tiles", "Wood chips" ], "type": "one_choice" }, { "quiz_num": 8, "question_num": 3, "has_img": false, "question": "How does ultrasound-based haptics (ultra haptics) work?", "answer": "It uses high-frequency sound waves to create tactile sensations in mid-air", "choices": [ "It employs mechanical motors to vibrate surfaces for feedback", "It requires physical contact with a device to provide feedback", "It uses high-frequency sound waves to create tactile sensations in mid-air", "It projects ultrasound waves to remotely change object shapes", "It uses tiny air fans to simulate touch sensations" ], "type": "one_choice" }, { "quiz_num": 8, "question_num": 4, "has_img": false, "question": "Who among the following pioneers built wearable computers? (select all that apply)", "answers": [ "Claude Shannon", "Edward Thorp", "Steve Mann", "Thad Starner" ], "choices": [ "Steve Mann", "Claude Shannon", "Thad Starner", "Herman Hollerith", "Edward Thorp" ], "type": "many_choice" }, { "quiz_num": 8, "question_num": 5, "has_img": false, "question": "Which of the following factors affecting the success of wearable computers depends on the body part on which it is worn?", "answers": [ "How easy it is to reach it", "How accurately a physiological sensor is able to work", "How heavy the device feels", "How socially acceptable it is to touch it" ], "choices": [ "How socially acceptable it is to touch it", "How easy it is to reach it", "How heavy the device feels", "How accurately a physiological sensor is able to work", "Battery life" ], "type": "many_choice" }, { "quiz_num": 9, "question_num": 1, "has_img": false, "question": "What are some of the interesting contributions of George Fitzmaurice's et al.'s Graspable User Interfaces project?", "answers": [ "It allowed object manipulation with both hands", "It is a pioneering work on tangible interaction", "It demonstrated a research lifecycle from observations of user behaviour all the way to a commercial application" ], "choices": [ "It showed how the shapes of virtual objects can be simulated through mechanical actuation", "It is a pioneering work on tangible interaction", "It set the vision for Radical Atoms", "It demonstrated a research lifecycle from observations of user behaviour all the way to a commercial application", "It allowed object manipulation with both hands" ], "type": "many_choice" }, { "quiz_num": 9, "question_num": 2, "has_img": false, "question": "A tangible user interface was deployed at a museum exhibit, enabling children to learn about historical events by manipulating blocks. 6 months after the initial deployment, the team realised that one of the blocks was missing and that without additional blocks they could not incorporate more recent events to the timeline.\nWhich of the following TUI limitations this scenario highlights?\u00a0", "answers": [ "Durability", "Scalability" ], "choices": [ "Limited remote interaction", "Portability", "Physical feedback", "Scalability", "Durability" ], "type": "many_choice" }, { "quiz_num": 9, "question_num": 3, "has_img": false, "question": "An important concept in tangible interaction is the mapping between the physical objects and the virtual concepts they represent. In the following systems, what are their main functionalities mapped to?", "choices": [ "Locations", "Body parts", "Time", "Instruments", "Voice messages", "Network activity" ], "parts": [ "Marble answering machine", "Music bottles", "Dangling string", "MetaDesk", "SpinalLog", "Ru" ], "answers": { "Marble answering machine": "Voice messages", "Music bottles": "Instruments", "Dangling string": "Network activity", "MetaDesk": "Locations", "SpinalLog": "Body parts", "Ru": "Time" }, "type": "matching" }, { "quiz_num": 9, "question_num": 4, "has_img": false, "question": "Which of the following are true about e-textiles?", "answers": [ "Resistive yarns can be used to create stretch sensors", "You must be careful with short circuits when using conductive thread", "Lilypad Arduino components are designed to be sewn onto fabric", "Conductive thread behaves like wires" ], "choices": [ "You must be careful with short circuits when using conductive thread", "Resistive yarns can be used to create stretch sensors", "Lilypad Arduino components are designed to be sewn onto fabric", "Conductive thread behaves like wires" ], "type": "many_choice" }, { "quiz_num": 9, "question_num": 5, "has_img": false, "question": "What is true about Heo et al.'s Thor's Hammer haptic feedback device?", "answers": [ "It generates force feedback without being grounded on a surface", "It main contribution lies in the idea behind it rather than the form factor", "It is a \"works-like\" prototype" ], "choices": [ "It main contribution lies in the idea behind it rather than the form factor", "It generates force feedback without being grounded on a surface", "It is a \"works-like\" prototype", "It generates force feedback through magnets that attract the device in different directions" ], "type": "many_choice" }, { "quiz_num": 10, "question_num": 1, "has_img": false, "question": "What is the name of the challenge in gaze interaction involving the inadvertent selection of targets as the user visually explores the interface?", "answers": [ "Midas touch" ], "choices": [ "Look and see", "Dwell time", "Gaze-touch", "Midas touch", "Gaze is fuzzy" ], "type": "many_choice" }, { "quiz_num": 10, "question_num": 2, "has_img": false, "question": "Which of the following principles of gaze interaction design are about the use of eye tracking data for implicit interaction?", "answers": [ "Gaze precedes action", "Gaze signals interest" ], "choices": [ "Gaze signals interest", "Gaze is a natural pointer", "Gaze precedes action", "Gaze is meaningful when different" ], "type": "many_choice" }, { "quiz_num": 10, "question_num": 3, "has_img": false, "question": "Which of the following eye movements can be used for gaze interaction?", "answers": [ "Smooth Pursuits", "Vergence", "Fixations", "Saccades" ], "choices": [ "Smooth Pursuits", "Vergence", "Fixations", "Diffusion", "Saccades" ], "type": "many_choice" }, { "quiz_num": 10, "question_num": 4, "has_img": false, "question": "What do we call an interface explicitly designed to last for a limited time?", "answers": [ "Ephemeral user interface" ], "choices": [ "Time-bound interface", "Ephemeral user interface", "Radical atoms", "Temporary user interface", "Tangible user interface" ], "type": "many_choice" }, { "quiz_num": 10, "question_num": 5, "has_img": false, "question": "What is true about the Lilypad Arduino", "answers": [ "It is programmed using the same language as other Arduino boards", "It is great for building projects with e-textiles", "It is designed to be sewn into fabrics with conductive thread" ], "choices": [ "It is designed to be sewn into fabrics with conductive thread", "It cannot be connected with conventional wires", "It is programmed using the same language as other Arduino boards", "It is designed for floating in water", "It is great for building projects with e-textiles" ], "type": "many_choice" }, { "quiz_num": 11, "question_num": 1, "has_img": false, "question": "Which of the following elements are part of Milgram and Kishino's framework?", "answers": [ "How faithfully the system can replicate the real/virtual world", "How convincingly the system makes users feel present within the virtual environment", "How much the system understands about the real world" ], "choices": [ "How many input modalities are involved in the interaction", "How faithfully the system can replicate the real/virtual world", "How convincingly the system makes users feel present within the virtual environment", "How much the system understands about the real world", "How tangible are objects involved in the experience" ], "type": "many_choice" }, { "quiz_num": 11, "question_num": 2, "has_img": false, "question": "Which of the following best describes diminished reality?", "answers": [ "The selective removal or masking of objects from the real world" ], "choices": [ "The selective removal or masking of objects from the real world", "Improving the resolution and fidelity of digital objects in AR", "Enhancing the virtual world with real-world objects", "Creating a completely virtual environment, detached from reality", "The augmentation of real-world elements with digital overlays" ], "type": "many_choice" }, { "quiz_num": 11, "question_num": 3, "has_img": false, "question": "Which of the following are reasons to use a situated mixed reality display, such as the Holodesk and smart mirrors?", "answers": [ "No need for user instrumentation" ], "choices": [ "To create fully immersive, virtual environments that block out the physical world", "No need for user instrumentation", "To enable mobile interactions in a physical space", "To replace traditional desktop interfaces for all computing tasks" ], "type": "many_choice" }, { "quiz_num": 11, "question_num": 4, "has_img": false, "question": "Which of the following are true about blended realities?", "answers": [ "It is about enabling distributed collaboration in mixed reality", "The disparities between the spatial configuration of the spaces is a major challenge", "They involve blending multiple physical spaces through a virtual medium" ], "choices": [ "They involve blending multiple physical spaces through a virtual medium", "The disparities between the spatial configuration of the spaces is a major challenge", "It is about enabling distributed collaboration in mixed reality", "It is synonymous with mixed reality" ], "type": "many_choice" }, { "quiz_num": 11, "question_num": 5, "has_img": false, "question": "According to the reflected reality design space, an interaction in which the user interacts with objects attached to their own body by looking at them on the mirror, belongs to which levels of the perspective and frame of reference dimensions?", "answers": [ "Second-person perspective", "Egocentric FoR" ], "choices": [ "First-person perspective", "Allocentric FoR", "Second-person perspective", "Egocentric FoR" ], "type": "many_choice" }, { "quiz_num": 12, "question_num": 1, "has_img": true, "question": "Research on haptic retargeting often results in a psychometric curve like the above. What is true about the method used to obtain it?", "answers": [ "The plot allows us to determine the offset in which users are as likely to say there is a difference as they are to say there isn't one", "Participants respond yes or no depending on whether they perceive a difference", "It involves varying the distance between the real and virtual objects" ], "choices": [ "It involves varying the distance between the real and virtual objects", "The lower the offset the more likely that users will perceive a difference", "The plot allows us to determine the offset in which users are as likely to say there is a difference as they are to say there isn't one", "Participants respond yes or no depending on whether they perceive a difference" ], "type": "many_choice" }, { "quiz_num": 12, "question_num": 2, "has_img": false, "question": "How was Morton Heilig's Sensorama different from modern VR? (select all that apply)", "answers": [ "Sensorama offered a passive, fixed-position experience, unlike the interactive, motion-tracked experience in modern VR", "Modern VR systems are more portable and can be used at home, unlike the large, stationary Sensorama", "Sensorama provided multisensory effects (like wind and scent), while most modern VR focuses mainly on visual and auditory experiences" ], "choices": [ "Sensorama provided multisensory effects (like wind and scent), while most modern VR focuses mainly on visual and auditory experiences", "Sensorama offered a passive, fixed-position experience, unlike the interactive, motion-tracked experience in modern VR", "The sensorama was used while sitting down, whereas modern headsets cannot be used this way", "Modern VR systems are more portable and can be used at home, unlike the large, stationary Sensorama", "Both Sensorama and modern VR have full-body motion tracking capabilities" ], "type": "many_choice" }, { "quiz_num": 12, "question_num": 3, "has_img": false, "question": "Which of the following are true about early chatbots like ELIZA and Eugene Goostman?", "answers": [ "They showed that it is possible to fool humans without fully simulating intelligence" ], "choices": [ "Eugene Goostman was designed to mimic a psychotherapist by using pattern matching and scripted responses", "Early chatbots could maintain context over long conversations just like modern chatbots", "They showed that it is possible to fool humans without fully simulating intelligence", "Early chatbots like ELIZA were capable of deep understanding and sophisticated natural language processing", "ELIZA was built to simulate a 13-year-old Ukranian to make its limitations less noticeable" ], "type": "many_choice" }, { "quiz_num": 12, "question_num": 4, "has_img": false, "question": "Which of the following scenarios are appropriate for voice user interfaces?", "answers": [ "Those that require the system to build rapport with the user", "Those in which users have their hands busy with another task", "Those in which users are wearing thick gloves" ], "choices": [ "Those that involve noisy public spaces", "Those that require the system to build rapport with the user", "Those in which users are wearing thick gloves", "Those in which users have their hands busy with another task", "Those that involve high-stakes decisions immediately triggered by user commands" ], "type": "many_choice" }, { "quiz_num": 12, "question_num": 5, "has_img": false, "question": "Imagine a user asked their voice assistant, \"Alexa, what is the capital of Australia?\" and it did not understand the question.\nAccording to Myers et al, which of the following are strategies commonly used by VUI users to cope with system errors and what might the corresponding command be in this scenario?", "answers": [ "New utterance: \"Alexa, please give me the name of Australia's capital\"", "Simplification: \"Alexa, capital of Australia\"" ], "choices": [ "New utterance: \"Alexa, please give me the name of Australia's capital\"", "Hyperarticulation: \"Alexa, what city is the capital of the country of Australia?\"", "Give answer: \"Alexa, Canberra is the capital of Australia\"", "Simplification: \"Alexa, capital of Australia\"" ], "type": "many_choice" } ] }