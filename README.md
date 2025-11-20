# RNAverse

RNAverse is a web based platform that predicts RNA methylation status (m6A, m7G, m5C) using pre trained ML and DL models. It provides an easy interface for researchers who want quick predictions without programming knowledge.

##  Project Purpose
RNAverse aims to offer:
- Simple RNA sequence input (single or batch)
- Fast predictions using existing ML and DL models
- Clear result visualization
- Downloadable CSV output

##  Key Features
- Enter or upload RNA sequences  
- Integrated models: SVM, Random Forest, Logistic Regression, MLP, XGBoost, CNN  
- Multiple methylation types supported  
- Result charts and tables  
- Batch sequence processing  
- Hosted on the University of Winnipeg ACS server

##  System Components
### Frontend
- React based web interface  
- Input forms, visualization pages, and help documentation  

### Backend
- Django based API  
- Input validation  
- Preprocessing  
- Model inference  

### Model Layer
- Pre trained ML and DL models provided by sponsors  
- Supports m6A, m5C, m7G predictions  

### Data Layer
- Temporary storage for results and logs  
- CSV generation support  

##  System Workflow
1. User enters or uploads RNA sequences  
2. System validates sequence format  
3. Preprocessing pipeline prepares data  
4. ML and DL models generate prediction  
5. User views charts and tables  
6. Results available for CSV download  

##  Scope
**In Scope**
- Pre trained model integration  
- Sequence input and batch processing  
- Result visualization  
- CSV export  
- React frontend and Django backend  

**Out of Scope**
- Training new models  
- User accounts  
- Mobile app development  
- Advanced analytics  

##  Team Members
- Priyanshu Mittal  
- Samarjeet Singh  
- Saif Alam  
- Aniket Thakur  

## Project Sponsors 
- Dr. Sheela Ramanna  
- Dr. Qian Liu  
- Dr. Muhammad Tahir  

