*US 01:* *As a researcher, I want to enter a single RNA sequence so I can get a methylation prediction from the selected trained model.*

*Acceptance Criteria:*  
1. Input box accepts one RNA sequence.  
2. Only A C G U characters allowed.  
3. System validates the sequence.  
4. System preprocesses the sequence.  
5. Prediction result is displayed clearly.  
6. User can download result as CSV.  


*US 02:* *As a researcher, I want to upload multiple RNA sequences so I can run predictions for many samples at once.*

*Acceptance Criteria:*  
1. Upload supports TXT and CSV.  
2. Each sequence is validated.  
3. Invalid sequences show line numbers.  
4. Valid sequences are processed together.  
5. Predictions shown in a table with visuals.  
6. Results downloadable as CSV.  


*US 03:* *As a researcher, I want to select from multiple trained ML and DL models so I can choose the best model for my analysis.*

*Acceptance Criteria:*  
1. System shows list of available models SVM RF MLP LR XGBoost CNN.  
2. User must select a model before prediction.  
3. Model selection applies to all sequences.  
4. System prevents prediction without selection.  


*US 04:* *As a researcher, I want to select which RNA methylation type to predict so I can get correct results for m6A m7G m5C or future types.*

*Acceptance Criteria:*  
1. System displays list of methylation types.  
2. User must select a type before submitting.  
3. Each type connects to its trained model set.  
4. System supports future types.  


*US 05:* *As a user, I want the system to validate RNA sequences so incorrect input never reaches the model.*

*Acceptance Criteria:*  
1. System detects invalid characters.  
2. System detects empty sequences.  
3. System blocks execution until fixed.  
4. System shows which sequence has the error.  


*US 06:* *As a researcher, I want the platform to preprocess RNA sequences so they are converted into model ready input.*

*Acceptance Criteria:*  
1. System applies correct preprocessing for each model.  
2. Supports k mer and one hot encoding.  
3. Works for single and batch input.  
4. Handles different sequence lengths.  


*US 07:* *As a user, I want to see simple visualizations of prediction results so I can understand the output easily.*

*Acceptance Criteria:*  
1. System generates plots or charts of results.  
2. Visuals match the selected model and methylation type.  
3. Visuals appear beside the results table.  
4. User can download or view visuals.  


*US 08:* *As a researcher, I want to download prediction results so I can save them for analysis.*

*Acceptance Criteria:*  
1. Download available after prediction.  
2. CSV file includes all prediction fields.  
3. Works for single and batch predictions.  
4. File includes sequence model and result.  


*US 09:* *As a system maintainer, I want the platform to support new models and new methylation types so the system stays expandable.*

*Acceptance Criteria:*  
1. New models can be added easily.  
2. New methylation types can be added to selection list.  
3. Minimal code changes required.  
4. Documentation included for expansion.  


*US 10:* *As a user, I want a help page with examples so I know how to format my input sequences.*

*Acceptance Criteria:*  
1. Help page shows valid examples.  
2. Explains file structure for batch uploads.  
3. Accessible from main page.  
4. Includes troubleshooting notes.  
