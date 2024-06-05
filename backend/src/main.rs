// #![allow(unused)]
// fn main() {
// extern crate async_graphql;
// use async_graphql::*;
// use serde_json::{json, Value};

// struct Query;
// #[Object]
// impl Query {
//   async fn version(&self) -> &str { "1.0" }    
// }
// async fn other() {
// let schema = Schema::new(Query, EmptyMutation, EmptySubscription);
// let res = schema.execute("{ add(a: 10, b: 20) }").await;

// let json = serde_json::to_string(&res);

// }
// }

#![allow(unused)]
use async_graphql::*;
use serde_json::{json, Value};

struct Query;

#[Object]
impl Query {
    async fn version(&self) -> &str {
        "1.0"
    }

    // Define the 'add' query if needed
    async fn add(&self, a: i32, b: i32) -> i32 {
        a + b
    }
}

#[tokio::main]
async fn main() {
    let schema = Schema::new(Query, EmptyMutation, EmptySubscription);
    // Make sure your query string matches the schema
    let res = schema.execute("{ version }").await;

    // Correctly handle JSON serialization
    let json = serde_json::to_string(&res).expect("Failed to serialize");
    println!("{}", json);
}
