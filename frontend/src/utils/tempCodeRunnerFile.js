e (true) {
//     const data = await get_data_from_api(page_num);
//     // console.log(data)
//     const filtered_records = filter_records_by_user_and_city(data, name, city);
//     // console.log(filtered_records)
//     for (const record of filtered_records) {
//       const amount = parse_amount(record.amount);
//       console.log(amount)
//       const txn_type = record.txnType;

//       if (txn_type === 'credit' && amount > max_credit_amount) {
//         max_credit_amount = amount;
//       } else if (txn_type === 'debit' && amount > max_debit_amount) {
//         max_debit_amount = amount;
//       }
//     }

//     if (data.page === data.total_pages) {
//       break;
//     }

//     page_num += 1;
//   }