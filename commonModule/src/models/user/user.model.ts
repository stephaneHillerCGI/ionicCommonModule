/**
 * User model
 */
export class User {

  public id: string;
  public firstName: string;

  constructor();
  constructor(obj: any);
  constructor(obj?: any) {
      this.id = obj && obj.id || null;
      this.firstName = obj && obj.firstName || null;
  }
}
