import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { ProjectDesc } from 'app/modules/admin/dashboards/models/ProjectDesc';
import { ProjectDescription } from 'app/modules/admin/dashboards/models/ProjectDescription';
import { FormsFieldsModule } from 'app/modules/admin/ui/forms/fields/fields.module';
import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';   
import { FormBuilder } from '@angular/forms';
import { finalize } from 'rxjs';
import { ProjectDescriptionService } from 'services/project_description/project-description.service';


@Component({
    selector: 'app-table-description',
    templateUrl: './table-description.component.html',
    styleUrls: ['./table-description.component.css'],
    changeDetection: ChangeDetectionStrategy.Default,
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatOptionModule,
        ReactiveFormsModule
    ],
})
export class TableDescriptionComponent implements OnInit {
    @ViewChild('stepper') stepper: MatStepper;

    firstFormGroup = new FormGroup({});
    secondFormGroup = new FormGroup({});
    projectForm: FormGroup;
    projectDtoForm: FormGroup;


    projectDto?: ProjectDesc;

    projectDescript: ProjectDescription;

    soilTypeControl = new FormControl();  // Add this line




    continents = [
        {
            name: 'Africa',
            countries: [
                'Algeria',
                'Angola',
                'Benin',
                'Botswana',
                'Burkina Faso',
                'Burundi',
                'Cape Verde',
                'Cameroon',
                'Central African Republic',
                'Chad',
                'Comoros',
                'Democratic Republic of the Congo',
                'Djibouti',
                'Egypt',
                'Equatorial Guinea',
                'Eritrea',
                'Ethiopia',
                'Gabon',
                'Gambia',
                'Ghana',
                'Guinea',
                'Guinea-Bissau',
                'Ivory Coast',
                'Kenya',
                'Lesotho',
                'Liberia',
                'Libya',
                'Madagascar',
                'Malawi',
                'Mali',
                'Mauritania',
                'Mauritius',
                'Mayotte',
                'Morocco',
                'Mozambique',
                'Namibia',
                'Niger',
                'Nigeria',
                'Réunion',
                'Republic of the Congo',
                'Rwanda',
                'São Tomé and Príncipe',
                'Senegal',
                'Seychelles',
                'Sierra Leone',
                'Somalia',
                'South Africa',
                'South Sudan',
                'Sudan',
                'Swaziland',
                'Tanzania',
                'Togo',
                'Tunisia',
                'Uganda',
                'Western Sahara',
                'Zambia',
                'Zimbabwe',
            ],
        },
        {
            name: 'Europe',
            countries: [
                'Albania',
                'Andorra',
                'Austria',
                'Belarus',
                'Belgium',
                'Bosnia and Herzegovina',
                'Bulgaria',
                'Croatia',
                'Cyprus',
                'Czech Republic',
                'Denmark',
                'Estonia',
                'Finland',
                'France',
                'Germany',
                'Greece',
                'Hungary',
                'Iceland',
                'Ireland',
                'Italy',
                'Latvia',
                'Liechtenstein',
                'Lithuania',
                'Luxembourg',
                'Macedonia',
                'Malta',
                'Moldova',
                'Monaco',
                'Montenegro',
                'Netherlands',
                'Norway',
                'Poland',
                'Portugal',
                'Romania',
                'Russia',
                'San Marino',
                'Serbia',
                'Slovakia',
                'Slovenia',
                'Spain',
                'Sweden',
                'Switzerland',
                'Ukraine',
                'United Kingdom',
                'Vatican City',
            ],
        },
        {
            name: 'Asia',
            countries: [
                'Afghanistan',
                'Armenia',
                'Azerbaijan',
                'Bahrain',
                'Bangladesh',
                'Bhutan',
                'Brunei',
                'Cambodia',
                'China',
                'Cyprus',
                'Georgia',
                'India',
                'Indonesia',
                'Iran',
                'Iraq',
                'Israel',
                'Japan',
                'Jordan',
                'Kazakhstan',
                'Kuwait',
                'Kyrgyzstan',
                'Laos',
                'Lebanon',
                'Malaysia',
                'Maldives',
                'Mongolia',
                'Myanmar',
                'Nepal',
                'North Korea',
                'Oman',
                'Pakistan',
                'Palestine',
                'Philippines',
                'Qatar',
                'Saudi Arabia',
                'Singapore',
                'South Korea',
                'Sri Lanka',
                'Syria',
                'Taiwan',
                'Tajikistan',
                'Thailand',
                'Timor-Leste',
                'Turkey',
                'Turkmenistan',
                'United Arab Emirates',
                'Uzbekistan',
                'Vietnam',
                'Yemen',
            ],
        },
        {
            name: 'North America',
            countries: [
                'Antigua and Barbuda',
                'Bahamas',
                'Barbados',
                'Belize',
                'Canada',
                'Costa Rica',
                'Cuba',
                'Dominica',
                'Dominican Republic',
                'El Salvador',
                'Grenada',
                'Guatemala',
                'Haiti',
                'Honduras',
                'Jamaica',
                'Mexico',
                'Nicaragua',
                'Panama',
                'Saint Kitts and Nevis',
                'Saint Lucia',
                'Saint Vincent and the Grenadines',
                'Trinidad and Tobago',
                'United States',
            ],
        },
        {
            name: 'South America',
            countries: [
                'Argentina',
                'Bolivia',
                'Brazil',
                'Chile',
                'Colombia',
                'Ecuador',
                'Guyana',
                'Paraguay',
                'Peru',
                'Suriname',
                'Uruguay',
                'Venezuela',
            ],
        },
        {
            name: 'Australia',
            countries: [
                'Australia',
                'Fiji',
                'Kiribati',
                'Marshall Islands',
                'Micronesia',
                'Nauru',
                'New Zealand',
                'Palau',
                'Papua New Guinea',
                'Samoa',
                'Solomon Islands',
                'Tonga',
                'Tuvalu',
                'Vanuatu',
            ],
        },
    ];
    selectedSource: string = 'Select Source';
    co2Result: number = 0;
    ch4Result: number = 0;
    n2oResult: number = 0;
    selectedContinent = 'Asia';
    selectedCountry = null;

    constructor(
        private _router: Router,
        private projectService: ProjectDescriptionService,
        private cdr: ChangeDetectorRef ,
        private formBuilder: FormBuilder
    ) {}
    countries = this.continents.find(
        (continent) => continent.name === this.selectedContinent
    ).countries;

    ngOnInit(): void {

       this.projectForm = this.formBuilder.group({
            userName: [''],
            date: [''],
            projectName: [''],
            projectCode: [0],
            projectCost: [0],
            fundingAgency: [''],
            executingAgency: [''],
            projectStatus: [''],
            continent: [''],
            country: [''],
            climate: [''],
            moisture: [''],
            soilType: [''],
            implementationPhase: [0],
            capitalizationPhase: [0],
            totalDurationOfAccounting: [0],
            source: [''],
            co2: [0],
            ch4: [0],
            n2o: [0],
       
    });


        this.selectedContinent = this.continents[0]?.name; // Select the first continent by default
       
        console.log(this.selectedSource);
        this.onContinentChange();
    }

    onContinentChange() {
        console.log('onContinentChange called');

        this.cdr.detectChanges();

        const selectedContinentObj = this.continents.find(
            (continent) => continent.name === this.selectedContinent
        );

        if (selectedContinentObj) {
            this.countries = selectedContinentObj.countries;
        } else {
            this.countries = [];
        }

        this.selectedCountry = null;
        this.cdr.detectChanges();
    }

     saveProject() {
 
        console.log("before projectDescript", this.projectDescript);
        
        
        this.projectDescript = this.projectForm.value ;
        console.log("afterprojectDescript", this.projectDescript);

        // this.projectDto.projectDescription = this.projectDescript ;

        // {
        //     "projectDescription":{
        //     "userName": "aaaaaaaaaa"
           
        // },
        // "eventType":""
        // }
        const project_description = {
            projectDescription:{
                userName: this.projectDescript.userName,
               
            },
            eventType:"",
            // userName: this.projectDescript.userName,
            // date:"",
            // projectName: "",
            //  projectCode:0,
            //  projectCost: 0,
            // fundingAgency: '',
            // executingAgency:"",
            //  projectStatus:"",
            //  continent:"",
            //  country:"",
            //  climate:"",
            //  moisture:"",
            //  soilType:"",
            //  implementationPhase:0,
            //  capitalizationPhase:0,
            //  totalDurationOfAccounting: 0,
            //  source:"",
            //  co2: 0,
            //  ch4: 0,
            //  n2o: 0,
        }
        console.log("after this.projectDto.projectDescription", project_description);

     
          this.projectService.createProjectDescription(project_description).subscribe();
    }
    
    // onSubmit() {
    //     // this.saveProject();
         
    //     console.log("before projectDescript", this.projectDescript);
        
        
    //     this.projectDescript = this.projectForm.value ;
    //     console.log("afterprojectDescript", this.projectDescript);

    //     // this.projectDto.projectDescription = this.projectDescript ;

    //     // {
    //     //     "projectDescription":{
    //     //     "userName": "aaaaaaaaaa"
           
    //     // },
    //     // "eventType":""
    //     // }
    //     const project_description = {
    //         projectDescription:{
    //             userName: this.projectDescript.userName,
               
    //         },
    //         eventType:"",
    //         // userName: this.projectDescript.userName,
    //         // date:"",
    //         // projectName: "",
    //         //  projectCode:0,
    //         //  projectCost: 0,
    //         // fundingAgency: '',
    //         // executingAgency:"",
    //         //  projectStatus:"",
    //         //  continent:"",
    //         //  country:"",
    //         //  climate:"",
    //         //  moisture:"",
    //         //  soilType:"",
    //         //  implementationPhase:0,
    //         //  capitalizationPhase:0,
    //         //  totalDurationOfAccounting: 0,
    //         //  source:"",
    //         //  co2: 0,
    //         //  ch4: 0,
    //         //  n2o: 0,
    //     }
    //     console.log("after this.projectDto.projectDescription", project_description);

     
    //       this.projectService.createProjectDescription(project_description).subscribe();
    // }

    onSubmit() {
        this.projectDescript = this.projectForm.value;
    
        const project_description = {
          projectDescription: {
            userName: this.projectDescript.userName,
            // Add other properties as needed
          },
          eventType: "",
        };
    
        // Prevent the default form submission
        event.preventDefault();
    
        // Call the service to create project description
        this.projectService
          .createProjectDescription(project_description)
          .pipe(
            finalize(() => {
              // This block will be executed regardless of success or error
              // You can add any additional logic here
            })
          )
          .subscribe(
            (response) => {
              // Handle the success response if needed
              console.log('Project created successfully:', response);
            },
            (error) => {
              // Handle the error response
              console.error('Error creating project:', error);
            }
          );
      }

    updateResults() {
      console.log("change happend");
        switch (this.selectedSource) {
            case '100yr SAR':
                this.co2Result = 1;
                this.ch4Result = 21;
                this.n2oResult = 310;
                break;
            case '100yr AR4':
                this.co2Result = 1;
                this.ch4Result = 25;
                this.n2oResult = 298;
                break;
            case '100yr AR5 with CC feedback':
                this.co2Result = 1;
                this.ch4Result = 34;
                this.n2oResult = 298;
                break;
            default:
                this.co2Result = 0;
                this.ch4Result = 0;
                this.n2oResult = 0;
                break;
        }
    }
}
