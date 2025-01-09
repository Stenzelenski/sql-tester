import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import alasql from 'alasql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [FormsModule],
  standalone: true,
})
export class AppComponent implements OnInit {
  query: string = '';
  results: any = '';

  ngOnInit() {
    alasql('CREATE TABLE test (language INT, hello STRING)');
    alasql("INSERT INTO test VALUES (1,'Hello!')");
    alasql("INSERT INTO test VALUES (2,'Aloha!')");
    alasql("INSERT INTO test VALUES (3,'Bonjour!')");
  }

  runQuery() {
    try {
      const result = alasql(this.query);

      this.results = JSON.stringify(result, null, 2);
    } catch (error) {
      this.results = `Error: ${error}`;
    }
  }
}
