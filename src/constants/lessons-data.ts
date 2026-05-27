import type { Lesson } from "@/types/lesson";

export const lessons: Lesson[] = [
  {
    id: "1",
    title: "Khái Lược Về Triết Học",
    subtitle: "Nguồn gốc, khái niệm và đối tượng của triết học",
    content: {
      sections: [
        {
          title: "Nguồn gốc của triết học",
          paragraphs: [
            "Triết học ra đời khoảng thế kỷ VIII – VI trước Công nguyên tại các trung tâm văn minh lớn như Ấn Độ, Trung Quốc và Hy Lạp cổ đại. Triết học xuất hiện khi con người bắt đầu có nhu cầu dùng lý trí để giải thích thế giới thay vì chỉ dựa vào thần thoại hay tín ngưỡng.",
            "Về nguồn gốc nhận thức, con người luôn muốn tìm hiểu về tự nhiên, xã hội và chính bản thân mình. Từ đó hình thành tư duy trừu tượng, tư duy lý luận và khả năng khái quát hóa. Đây chính là cơ sở nhận thức dẫn đến sự ra đời của triết học.",
            "Về nguồn gốc xã hội, triết học xuất hiện khi xã hội có sự phân công lao động, phân chia giai cấp và hình thành chế độ tư hữu. Vì vậy, triết học thường mang \"tính đảng\", phục vụ lợi ích của các giai cấp khác nhau.",
          ],
        },
        {
          title: "Khái niệm triết học",
          paragraphs: [
            "Ở Trung Quốc, \"Triết\" có nghĩa là trí tuệ, thể hiện sự truy tìm bản chất của con người, xã hội và vũ trụ. Ở Ấn Độ, \"Darshana\" mang nghĩa là chiêm ngưỡng, là con đường suy ngẫm để đạt tới chân lý. Trong khi đó, phương Tây dùng từ \"Philosophia\", nghĩa là yêu thích sự thông thái, nhấn mạnh khát vọng tìm kiếm chân lý của con người.",
            "Theo quan điểm của chủ nghĩa Mác – Lênin, triết học là hệ thống quan điểm lý luận chung nhất về thế giới và vị trí của con người trong thế giới đó; đồng thời là khoa học nghiên cứu những quy luật vận động và phát triển chung nhất của tự nhiên, xã hội và tư duy.",
          ],
        },
        {
          title: "Vấn đề đối tượng của triết học trong lịch sử",
          paragraphs: [
            "Trong lịch sử, đối tượng nghiên cứu của triết học có sự thay đổi qua từng thời kỳ. Ở thời cổ đại, triết học được xem là \"khoa học của mọi khoa học\" và chủ yếu nghiên cứu tự nhiên. Sang thời trung đại, triết học phục vụ thần học và tôn giáo, mang tính kinh viện.",
            "Đến thời phục hưng và cận đại, triết học đề cao khoa học và lý trí, muốn trở thành nền tảng của mọi khoa học. Triết học cổ điển Đức phát triển mạnh tư duy biện chứng. Đến triết học Mác – Lênin, triết học tập trung nghiên cứu những quy luật vận động và phát triển chung nhất của tự nhiên, xã hội và tư duy.",
          ],
        },
        {
          title: "Triết học – hạt nhân lý luận của thế giới quan",
          paragraphs: [
            "Thế giới quan là hệ thống quan niệm của con người về thế giới xung quanh, vị trí của con người trong thế giới và về cuộc sống xã hội. Có nhiều loại thế giới quan như thế giới quan tôn giáo, thế giới quan khoa học và thế giới quan triết học.",
            "Triết học được xem là hạt nhân lý luận của thế giới quan vì triết học chính là thế giới quan ở trình độ lý luận cao. Triết học không chỉ ảnh hưởng và chi phối các loại thế giới quan khác mà còn định hướng nhận thức và hành động của con người. Trong đó, thế giới quan duy vật biện chứng được xem là đỉnh cao của thế giới quan khoa học.",
          ],
        },
      ],
    },
    summary: {
      sections: [
        {
          title: "Nguồn gốc của triết học",
          points: [
            { text: "Nhu cầu nhận thức của con người." },
            { text: "Điều kiện xã hội có giai cấp và phân công lao động." },
          ],
          memorize: "Có nhận thức + có xã hội phát triển → triết học ra đời",
        },
        {
          title: "Khái niệm triết học",
          points: [
            { text: "Trung Quốc: Triết = trí tuệ." },
            { text: "Ấn Độ: Darshana = chiêm ngưỡng." },
            { text: "Phương Tây: Philosophia = yêu thích sự thông thái." },
            { text: "Theo Mác – Lênin: Triết học là khoa học nghiên cứu quy luật vận động và phát triển chung nhất của tự nhiên, xã hội và tư duy." },
          ],
          memorize: "Triết học nghiên cứu cái chung nhất",
        },
        {
          title: "Đối tượng của triết học qua lịch sử",
          points: [
            { text: "Cổ đại: Khoa học của mọi khoa học." },
            { text: "Trung đại: Phục vụ thần học." },
            { text: "Phục hưng – cận đại: Đề cao khoa học." },
            { text: "Mác – Lênin: Nghiên cứu quy luật chung nhất." },
          ],
          memorize: "Triết học thay đổi theo lịch sử xã hội",
        },
        {
          title: "Triết học và thế giới quan",
          points: [
            { text: "Định hướng nhận thức." },
            { text: "Ảnh hưởng hành động con người." },
            { text: "Chi phối các loại thế giới quan khác." },
          ],
          memorize: "Triết học = nền tảng tư duy của con người",
        },
      ],
    },
    quiz: [
      { id: 1, question: "Triết học ra đời vào khoảng thời gian nào?", options: ["Thế kỷ I", "Thế kỷ VIII – VI TCN", "Thế kỷ XV", "Thế kỷ XIX"], correctAnswer: 1 },
      { id: 2, question: "Triết học xuất hiện đầu tiên ở đâu?", options: ["Mỹ", "Nhật Bản", "Ấn Độ, Trung Quốc, Hy Lạp cổ đại", "Việt Nam"], correctAnswer: 2 },
      { id: 3, question: "Nguồn gốc nhận thức của triết học xuất phát từ:", options: ["Chiến tranh", "Nhu cầu hiểu biết thế giới", "Tôn giáo", "Chính trị"], correctAnswer: 1 },
      { id: 4, question: "Nguồn gốc xã hội của triết học là:", options: ["Sự phát triển nghệ thuật", "Sự phân chia giai cấp và lao động", "Sự phát triển thể thao", "Sự phát triển du lịch"], correctAnswer: 1 },
      { id: 5, question: "\"Philosophia\" nghĩa là gì?", options: ["Chiêm ngưỡng", "Trí tuệ", "Yêu thích sự thông thái", "Tư duy"], correctAnswer: 2 },
      { id: 6, question: "\"Darshana\" thuộc nền văn hóa nào?", options: ["Trung Quốc", "Hy Lạp", "Ấn Độ", "La Mã"], correctAnswer: 2 },
      { id: 7, question: "Theo Trung Quốc cổ đại, \"Triết\" nghĩa là:", options: ["Tình yêu", "Trí tuệ", "Tôn giáo", "Tự nhiên"], correctAnswer: 1 },
      { id: 8, question: "Theo Mác – Lênin, triết học nghiên cứu:", options: ["Văn học", "Nghệ thuật", "Quy luật chung nhất của tự nhiên, xã hội và tư duy", "Chính trị"], correctAnswer: 2 },
      { id: 9, question: "Triết học cổ đại được xem là:", options: ["Khoa học xã hội", "Khoa học tự nhiên", "Khoa học của mọi khoa học", "Khoa học kỹ thuật"], correctAnswer: 2 },
      { id: 10, question: "Triết học trung đại phục vụ cho:", options: ["Kinh tế", "Thần học", "Quân sự", "Khoa học kỹ thuật"], correctAnswer: 1 },
      { id: 11, question: "Triết học phục hưng đề cao:", options: ["Tôn giáo", "Khoa học và lý trí", "Chiến tranh", "Nghệ thuật"], correctAnswer: 1 },
      { id: 12, question: "Triết học Mác – Lênin nghiên cứu:", options: ["Một ngành khoa học riêng", "Quy luật chung nhất", "Tôn giáo", "Nghệ thuật"], correctAnswer: 1 },
      { id: 13, question: "Thế giới quan là:", options: ["Hệ thống quan niệm của con người về thế giới", "Hệ thống pháp luật", "Hệ thống giáo dục", "Hệ thống kinh tế"], correctAnswer: 0 },
      { id: 14, question: "Triết học là hạt nhân lý luận của:", options: ["Chính trị", "Khoa học", "Thế giới quan", "Tôn giáo"], correctAnswer: 2 },
      { id: 15, question: "Đỉnh cao của thế giới quan khoa học là:", options: ["Thế giới quan tôn giáo", "Thế giới quan kinh nghiệm", "Thế giới quan duy vật biện chứng", "Thế giới quan thần thoại"], correctAnswer: 2 },
    ],
    flashcards: [
      { id: 1, question: "Triết học ra đời vào khoảng thời gian nào?", answer: "Thế kỷ VIII – VI TCN" },
      { id: 2, question: "Triết học xuất hiện ở đâu?", answer: "Ấn Độ, Trung Quốc, Hy Lạp cổ đại" },
      { id: 3, question: "Hai nguồn gốc của triết học?", answer: "Nguồn gốc nhận thức và nguồn gốc xã hội" },
      { id: 4, question: "Nguồn gốc nhận thức là gì?", answer: "Nhu cầu hiểu biết thế giới của con người" },
      { id: 5, question: "Nguồn gốc xã hội là gì?", answer: "Phân công lao động và phân chia giai cấp" },
      { id: 6, question: "\"Philosophia\" nghĩa là gì?", answer: "Yêu thích sự thông thái" },
      { id: 7, question: "\"Darshana\" nghĩa là gì?", answer: "Chiêm ngưỡng" },
      { id: 8, question: "\"Triết\" theo Trung Quốc nghĩa là gì?", answer: "Trí tuệ" },
      { id: 9, question: "Theo Mác – Lênin, triết học là gì?", answer: "Khoa học nghiên cứu quy luật chung nhất" },
      { id: 10, question: "Triết học cổ đại được xem là gì?", answer: "Khoa học của mọi khoa học" },
      { id: 11, question: "Triết học trung đại phục vụ cho gì?", answer: "Thần học" },
      { id: 12, question: "Triết học phục hưng đề cao điều gì?", answer: "Khoa học và lý trí" },
      { id: 13, question: "Triết học Mác – Lênin nghiên cứu gì?", answer: "Quy luật vận động chung nhất" },
      { id: 14, question: "Thế giới quan là gì?", answer: "Hệ thống quan niệm về thế giới" },
      { id: 15, question: "Triết học là hạt nhân lý luận của gì?", answer: "Thế giới quan" },
    ],
  },
  {
    id: "2",
    title: "Vấn Đề Cơ Bản Của Triết Học",
    subtitle: "Chủ nghĩa duy vật, duy tâm và nhận thức luận",
    content: {
      sections: [
        {
          title: "Nội dung vấn đề cơ bản của triết học",
          paragraphs: [
            "Theo Ph.Ăng-ghen: \"Vấn đề cơ bản lớn của mọi triết học, đặc biệt là của triết học hiện đại, là vấn đề quan hệ giữa tư duy với tồn tại\" (hay giữa ý thức với vật chất).",
            "Đây là vấn đề xuất phát điểm, quyết định toàn bộ thế giới quan của một nhà triết học. Vấn đề này gồm hai mặt:",
            "Mặt thứ nhất (Bản thể luận): Trả lời câu hỏi: Giữa vật chất và ý thức, cái nào có trước, cái nào có sau? Cái nào quyết định cái nào?",
            "Mặt thứ hai (Nhận thức luận): Trả lời câu hỏi: Con người có khả năng nhận thức được thế giới hay không?",
          ],
        },
        {
          title: "Chủ nghĩa duy vật và chủ nghĩa duy tâm",
          paragraphs: [
            "Dựa vào cách giải quyết mặt thứ nhất của vấn đề cơ bản, triết học chia thành hai trào lưu đối lập:",
            "Chủ nghĩa duy vật (Materialism): Khẳng định vật chất có trước, ý thức có sau; vật chất tồn tại khách quan và quyết định ý thức. Trong lịch sử, chủ nghĩa duy vật trải qua ba hình thức: Chủ nghĩa duy vật chất phác (Cổ đại) – đồng nhất vật chất với các vật thể cụ thể; Chủ nghĩa duy vật siêu hình (Thế kỷ XVII-XVIII) – nhìn thế giới như cỗ máy khổng lồ; Chủ nghĩa duy vật biện chứng (Mác-Lênin) – vật chất quyết định ý thức nhưng ý thức tác động ngược lại qua thực tiễn.",
            "Chủ nghĩa duy tâm (Idealism): Khẳng định ý thức, tinh thần có trước và quyết định vật chất. Chia làm hai phái: Chủ nghĩa duy tâm chủ quan (Berkeley, Hume) – thế giới là \"phức hợp của những cảm giác\" cá nhân; Chủ nghĩa duy tâm khách quan (Plato, Hegel) – tinh thần tuyệt đối tồn tại độc lập bên ngoài con người.",
          ],
        },
        {
          title: "Thuyết có thể biết và thuyết không thể biết",
          paragraphs: [
            "Khả tri luận: Khẳng định con người hoàn toàn có khả năng nhận thức được bản chất thế giới. Những tri thức khoa học là sự phản ánh chân thực hiện thực khách quan. Đại diện: chiếm đại đa số các nhà triết học.",
            "Bất khả tri luận: Khẳng định con người không thể hiểu được bản chất chân thực của thế giới, nhận thức chỉ dừng lại ở các hiện tượng bề ngoài. Đại biểu tiêu biểu: Immanuel Kant với thuyết \"Vật tự nó\" – con người chỉ nhận thức được các \"hiện tượng\", còn bản thân \"vật tự nó\" thì nhận thức vĩnh viễn không thể vươn tới được.",
          ],
        },
      ],
    },
    summary: {
      sections: [
        {
          title: "Vấn đề cơ bản của Triết học",
          points: [
            { text: "Là mối quan hệ giữa Ý thức (tư duy) và Vật chất (tồn tại), gồm 2 mặt." },
            { text: "Mặt 1: Vật chất và ý thức, cái nào có trước và quyết định cái nào?" },
            { text: "Mặt 2: Con người có thể nhận thức được thế giới hay không?" },
          ],
          memorize: "Cái gì sinh ra cái gì?",
        },
        {
          title: "Chủ nghĩa Duy vật & Chủ nghĩa Duy tâm",
          points: [
            { text: "Duy vật: Vật chất quyết định ý thức (3 hình thức: Chất phác, Siêu hình, Biện chứng)." },
            { text: "Duy tâm: Ý thức quyết định vật chất (2 phái: Chủ quan, Khách quan)." },
          ],
          memorize: "Vật trước – Tâm sau (DV), Tâm trước – Vật sau (DT)",
        },
        {
          title: "Khả tri luận & Bất khả tri luận",
          points: [
            { text: "Khả tri luận: Con người có thể nhận thức thế giới." },
            { text: "Bất khả tri luận: Con người không thể biết bản chất thế giới (Kant)." },
          ],
          memorize: "Khả tri = Biết được, Bất khả tri = Không chạm được bản chất",
        },
      ],
    },
    quiz: [
      { id: 1, question: "Vấn đề cơ bản của triết học là gì?", options: ["Quan hệ giữa xã hội và tự nhiên", "Quan hệ giữa tư duy và tồn tại", "Quan hệ giữa con người và xã hội", "Quan hệ giữa kinh tế và chính trị"], correctAnswer: 1 },
      { id: 2, question: "Vấn đề cơ bản của triết học gồm mấy mặt?", options: ["1", "2", "3", "4"], correctAnswer: 1 },
      { id: 3, question: "Mặt thứ nhất của vấn đề cơ bản trả lời câu hỏi nào?", options: ["Con người có thể biết thế giới không", "Vật chất có trước hay ý thức có trước", "Xã hội phát triển như thế nào", "Ý nghĩa cuộc sống là gì"], correctAnswer: 1 },
      { id: 4, question: "Mặt thứ hai của vấn đề cơ bản là gì?", options: ["Bản thể luận", "Nhận thức luận", "Kinh tế học", "Chính trị học"], correctAnswer: 1 },
      { id: 5, question: "Chủ nghĩa duy vật khẳng định:", options: ["Ý thức có trước", "Vật chất có trước", "Cả hai như nhau", "Không xác định được"], correctAnswer: 1 },
      { id: 6, question: "Chủ nghĩa duy tâm khẳng định:", options: ["Vật chất quyết định ý thức", "Ý thức quyết định vật chất", "Vật chất và ý thức độc lập", "Không có vật chất"], correctAnswer: 1 },
      { id: 7, question: "Duy vật chất phác đặc điểm là:", options: ["Hiện đại, khoa học", "Đồng nhất vật chất với các yếu tố tự nhiên", "Phủ nhận vật chất", "Chỉ nghiên cứu xã hội"], correctAnswer: 1 },
      { id: 8, question: "Duy vật siêu hình chịu ảnh hưởng mạnh từ:", options: ["Sinh học", "Cơ học cổ điển", "Toán học", "Tâm lý học"], correctAnswer: 1 },
      { id: 9, question: "Chủ nghĩa duy vật biện chứng do ai phát triển?", options: ["Kant", "Hegel", "Mác – Lênin", "Plato"], correctAnswer: 2 },
      { id: 10, question: "Duy tâm chủ quan cho rằng:", options: ["Thế giới tồn tại khách quan", "Thế giới là cảm giác cá nhân", "Thế giới là vật chất", "Không có ý thức"], correctAnswer: 1 },
      { id: 11, question: "George Berkeley nổi tiếng với quan điểm:", options: ["Vật chất quyết định ý thức", "Tồn tại tức là được tri giác", "Con người không biết gì", "Thế giới là vật chất"], correctAnswer: 1 },
      { id: 12, question: "Duy tâm khách quan thừa nhận:", options: ["Ý thức cá nhân", "Tinh thần tuyệt đối tồn tại độc lập", "Không có tinh thần", "Vật chất tự sinh"], correctAnswer: 1 },
      { id: 13, question: "Khả tri luận khẳng định:", options: ["Không thể nhận thức thế giới", "Có thể nhận thức thế giới", "Chỉ cảm giác là thật", "Không có tri thức"], correctAnswer: 1 },
      { id: 14, question: "Bất khả tri luận cho rằng:", options: ["Con người hiểu toàn bộ thế giới", "Không thể nhận thức bản chất thế giới", "Khoa học là tuyệt đối đúng", "Thế giới không tồn tại"], correctAnswer: 1 },
      { id: 15, question: "Đại diện bất khả tri luận tiêu biểu là:", options: ["Marx", "Hegel", "Kant", "Engels"], correctAnswer: 2 },
    ],
    flashcards: [
      { id: 1, question: "Vấn đề cơ bản của triết học là gì?", answer: "Quan hệ giữa tư duy (ý thức) và tồn tại (vật chất)" },
      { id: 2, question: "Vấn đề cơ bản gồm mấy mặt?", answer: "2 mặt (bản thể luận & nhận thức luận)" },
      { id: 3, question: "Mặt 1 hỏi gì?", answer: "Cái nào có trước và quyết định cái nào" },
      { id: 4, question: "Mặt 2 hỏi gì?", answer: "Con người có nhận thức được thế giới không" },
      { id: 5, question: "Duy vật là gì?", answer: "Vật chất có trước, quyết định ý thức" },
      { id: 6, question: "Duy tâm là gì?", answer: "Ý thức có trước, quyết định vật chất" },
      { id: 7, question: "3 hình thức duy vật?", answer: "Chất phác – Siêu hình – Biện chứng" },
      { id: 8, question: "Duy vật chất phác là gì?", answer: "Đồng nhất vật chất với tự nhiên (nước, lửa…)" },
      { id: 9, question: "Duy vật siêu hình đặc điểm?", answer: "Thế giới như cỗ máy tĩnh tại" },
      { id: 10, question: "Duy vật biện chứng là gì?", answer: "Vật chất quyết định ý thức + ý thức tác động lại qua thực tiễn" },
      { id: 11, question: "2 loại duy tâm?", answer: "Chủ quan & khách quan" },
      { id: 12, question: "Duy tâm chủ quan?", answer: "Thế giới là cảm giác cá nhân" },
      { id: 13, question: "Duy tâm khách quan?", answer: "Tinh thần tuyệt đối tồn tại bên ngoài con người" },
      { id: 14, question: "Khả tri luận là gì?", answer: "Con người có thể nhận thức thế giới" },
      { id: 15, question: "Bất khả tri luận là gì?", answer: "Con người không thể biết bản chất thế giới" },
    ],
  },
  {
    id: "3",
    title: "Sự Ra Đời & Phát Triển Triết Học Mác – Lênin",
    subtitle: "Điều kiện lịch sử, giai đoạn phát triển và vai trò của Lênin",
    content: {
      sections: [
        {
          title: "Những điều kiện lịch sử của sự ra đời triết học Mác",
          paragraphs: [
            "Triết học Mác ra đời dựa trên sự thống nhất giữa điều kiện khách quan và nhân tố chủ quan.",
            "Về điều kiện kinh tế – xã hội, chủ nghĩa tư bản phát triển mạnh làm xuất hiện giai cấp công nhân và tình trạng bóc lột giá trị thặng dư. Điều này đòi hỏi phải có một học thuyết khoa học để bảo vệ quyền lợi của giai cấp công nhân.",
            "Về tiền đề lý luận, triết học Mác kế thừa tinh hoa của triết học cổ điển Đức, kinh tế chính trị học cổ điển Anh và chủ nghĩa xã hội không tưởng Pháp. Đồng thời, những thành tựu khoa học tự nhiên cũng tạo cơ sở cho sự hình thành triết học Mác.",
            "Ngoài ra, C. Mác và Ph. Ăngghen còn tích cực tham gia hoạt động thực tiễn, hiểu rõ đời sống của giai cấp công nhân nên đã xây dựng nên học thuyết cách mạng mới.",
          ],
        },
        {
          title: "Những thời kỳ chủ yếu trong sự hình thành và phát triển",
          paragraphs: [
            "Giai đoạn 1841 – 1844 là thời kỳ C. Mác và Ph. Ăngghen chuyển từ lập trường duy tâm sang duy vật và từ dân chủ cách mạng sang chủ nghĩa cộng sản.",
            "Từ 1845 – 1848, hai ông xây dựng những nguyên lý cơ bản của chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử qua các tác phẩm như Luận cương về Feuerbach, Hệ tư tưởng Đức và Tuyên ngôn của Đảng cộng sản.",
            "Từ 1848 – 1895, triết học Mác tiếp tục được bổ sung và phát triển toàn diện qua các tác phẩm lớn như Tư bản và Chống Đuyrinh.",
          ],
        },
        {
          title: "Thực chất và ý nghĩa cuộc cách mạng trong triết học",
          paragraphs: [
            "C. Mác và Ph. Ăngghen đã khắc phục hạn chế của chủ nghĩa duy vật cũ và phép biện chứng duy tâm để xây dựng chủ nghĩa duy vật biện chứng. Đồng thời, hai ông vận dụng quan điểm duy vật vào nghiên cứu xã hội, từ đó sáng tạo ra chủ nghĩa duy vật lịch sử.",
            "Triết học Mác vừa mang tính khoa học vừa mang tính cách mạng, thống nhất giữa lý luận và thực tiễn, đồng thời khẳng định vai trò của thực tiễn trong nhận thức và cải tạo thế giới.",
          ],
        },
        {
          title: "Giai đoạn Lênin trong sự phát triển triết học Mác",
          paragraphs: [
            "Cuối thế kỷ XIX – đầu thế kỷ XX, chủ nghĩa tư bản chuyển sang giai đoạn đế quốc chủ nghĩa và xuất hiện nhiều mâu thuẫn xã hội mới. Trong bối cảnh đó, V.I. Lênin đã bảo vệ và phát triển triết học Mác.",
            "Lênin đấu tranh chống các quan điểm duy tâm, phát triển chủ nghĩa duy vật biện chứng và duy vật lịch sử, đồng thời bổ sung lý luận thông qua thực tiễn cách mạng xã hội chủ nghĩa. Một số tác phẩm tiêu biểu: Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán, Bút ký triết học và Nhà nước và cách mạng.",
          ],
        },
      ],
    },
    summary: {
      sections: [
        {
          title: "Điều kiện ra đời của triết học Mác",
          points: [
            { text: "Điều kiện kinh tế – xã hội của chủ nghĩa tư bản." },
            { text: "Tiền đề lý luận từ triết học Đức, KTCT Anh, CNXH không tưởng Pháp." },
            { text: "Thành tựu khoa học tự nhiên." },
            { text: "Hoạt động thực tiễn của C. Mác và Ph. Ăngghen." },
          ],
          memorize: "Triết học Mác ra đời từ thực tiễn xã hội và kế thừa tinh hoa nhân loại.",
        },
        {
          title: "Các giai đoạn phát triển",
          points: [
            { text: "1841 – 1844: Chuyển từ duy tâm sang duy vật." },
            { text: "1845 – 1848: Hình thành nguyên lý cơ bản." },
            { text: "1848 – 1895: Phát triển hoàn thiện." },
          ],
          memorize: "Từ chuyển biến tư tưởng → hình thành → phát triển hoàn chỉnh.",
        },
        {
          title: "Ý nghĩa cuộc cách mạng",
          points: [
            { text: "Xây dựng chủ nghĩa duy vật biện chứng." },
            { text: "Sáng tạo chủ nghĩa duy vật lịch sử." },
            { text: "Thống nhất lý luận với thực tiễn." },
          ],
          memorize: "Triết học Mác = duy vật + biện chứng + thực tiễn.",
        },
        {
          title: "Vai trò của Lênin",
          points: [
            { text: "Bảo vệ và phát triển triết học Mác." },
            { text: "Đấu tranh chống các quan điểm duy tâm." },
            { text: "Bổ sung lý luận qua thực tiễn cách mạng." },
          ],
          memorize: "Lênin là người phát triển triết học Mác trong thời đại đế quốc chủ nghĩa.",
        },
      ],
    },
    quiz: [
      { id: 1, question: "Triết học Mác ra đời dựa trên sự thống nhất giữa:", options: ["Khoa học và nghệ thuật", "Điều kiện khách quan và nhân tố chủ quan", "Chính trị và quân sự", "Tôn giáo và xã hội"], correctAnswer: 1 },
      { id: 2, question: "Tiền đề lý luận của triết học Mác không bao gồm:", options: ["Triết học cổ điển Đức", "Kinh tế chính trị học Anh", "Chủ nghĩa xã hội không tưởng Pháp", "Thần học trung cổ"], correctAnswer: 3 },
      { id: 3, question: "Giai cấp nào là cơ sở xã hội của triết học Mác?", options: ["Giai cấp địa chủ", "Giai cấp công nhân", "Giai cấp tư sản", "Nông dân"], correctAnswer: 1 },
      { id: 4, question: "Giai đoạn 1845 – 1848 có ý nghĩa gì?", options: ["Hoàn thiện chủ nghĩa tư bản", "Hình thành nguyên lý cơ bản của triết học Mác", "Xuất hiện triết học Hy Lạp", "Phát triển thần học"], correctAnswer: 1 },
      { id: 5, question: "Tác phẩm nào gắn với sự ra đời của chủ nghĩa cộng sản khoa học?", options: ["Nhà nước và cách mạng", "Tư bản", "Tuyên ngôn của Đảng cộng sản", "Chống Đuyrinh"], correctAnswer: 2 },
      { id: 6, question: "C. Mác và Ph. Ăngghen đã xây dựng:", options: ["Chủ nghĩa duy tâm", "Chủ nghĩa duy vật biện chứng", "Chủ nghĩa thần bí", "Chủ nghĩa kinh viện"], correctAnswer: 1 },
      { id: 7, question: "Triết học Mác mang đặc điểm:", options: ["Chỉ mang tính khoa học", "Chỉ mang tính cách mạng", "Vừa khoa học vừa cách mạng", "Mang tính thần học"], correctAnswer: 2 },
      { id: 8, question: "Triết học Mác nhấn mạnh vai trò của:", options: ["Tôn giáo", "Thực tiễn", "Thần học", "Cảm giác cá nhân"], correctAnswer: 1 },
      { id: 9, question: "Người bảo vệ và phát triển triết học Mác trong thời kỳ đế quốc chủ nghĩa là:", options: ["Hegel", "Kant", "Lênin", "Feuerbach"], correctAnswer: 2 },
      { id: 10, question: "Một tác phẩm tiêu biểu của Lênin là:", options: ["Gia đình thần thánh", "Tư bản", "Nhà nước và cách mạng", "Luận cương Feuerbach"], correctAnswer: 2 },
    ],
    flashcards: [
      { id: 1, question: "Triết học Mác ra đời dựa trên điều gì?", answer: "Điều kiện khách quan và nhân tố chủ quan" },
      { id: 2, question: "Tiền đề lý luận của triết học Mác gồm gì?", answer: "Triết học Đức, KTCT Anh, CNXH không tưởng Pháp" },
      { id: 3, question: "Giai cấp nền tảng của triết học Mác?", answer: "Giai cấp công nhân" },
      { id: 4, question: "Giai đoạn 1841 – 1844 là gì?", answer: "Chuyển từ duy tâm sang duy vật" },
      { id: 5, question: "Giai đoạn 1845 – 1848 có ý nghĩa gì?", answer: "Hình thành nguyên lý triết học Mác" },
      { id: 6, question: "Tác phẩm nổi tiếng năm 1848?", answer: "Tuyên ngôn của Đảng cộng sản" },
      { id: 7, question: "C. Mác và Ăngghen sáng tạo ra gì?", answer: "Chủ nghĩa duy vật biện chứng" },
      { id: 8, question: "Chủ nghĩa duy vật lịch sử nghiên cứu gì?", answer: "Xã hội và lịch sử loài người" },
      { id: 9, question: "Triết học Mác mang tính gì?", answer: "Khoa học và cách mạng" },
      { id: 10, question: "Triết học Mác đề cao vai trò gì?", answer: "Vai trò của thực tiễn" },
      { id: 11, question: "Ai phát triển triết học Mác ở thế kỷ XX?", answer: "V.I. Lênin" },
      { id: 12, question: "Lênin đấu tranh chống gì?", answer: "Các quan điểm duy tâm" },
      { id: 13, question: "Một tác phẩm tiêu biểu của Lênin?", answer: "Nhà nước và cách mạng" },
      { id: 14, question: "Triết học Mác – Lênin nghiên cứu gì?", answer: "Quy luật vận động chung nhất" },
      { id: 15, question: "Triết học Mác – Lênin có vai trò gì?", answer: "Định hướng nhận thức và cải tạo xã hội" },
    ],
  },
  {
    id: "4",
    title: "Đối Tượng & Chức Năng Triết Học Mác – Lênin",
    subtitle: "Khái niệm, đối tượng nghiên cứu và chức năng",
    content: {
      sections: [
        {
          title: "Khái niệm triết học Mác – Lênin",
          paragraphs: [
            "Triết học Mác – Lênin là hệ thống quan điểm duy vật biện chứng về tự nhiên, xã hội và tư duy; là thế giới quan và phương pháp luận khoa học của giai cấp công nhân cùng các lực lượng tiến bộ trong xã hội.",
            "Triết học Mác – Lênin được xây dựng bởi C. Mác và Ph. Ăngghen, sau đó được V.I. Lênin bảo vệ và phát triển trong điều kiện lịch sử mới. Đây là hình thức phát triển cao nhất của chủ nghĩa duy vật và phép biện chứng trong lịch sử triết học.",
            "Triết học Mác – Lênin không chỉ giải thích thế giới mà còn hướng con người đến việc cải tạo thế giới thông qua hoạt động thực tiễn.",
          ],
        },
        {
          title: "Đối tượng của triết học Mác – Lênin",
          paragraphs: [
            "Triết học Mác – Lênin nghiên cứu những quy luật vận động và phát triển chung nhất của tự nhiên, xã hội và tư duy.",
            "Khác với các khoa học cụ thể chỉ nghiên cứu từng lĩnh vực riêng biệt, triết học Mác – Lênin nghiên cứu những quy luật chung nhất chi phối toàn bộ thế giới.",
            "Ngoài ra, triết học Mác – Lênin còn nghiên cứu mối quan hệ giữa vật chất và ý thức, giữa tồn tại xã hội và tư duy con người nhằm xây dựng thế giới quan khoa học và phương pháp nhận thức đúng đắn.",
          ],
        },
        {
          title: "Chức năng của triết học Mác – Lênin",
          paragraphs: [
            "Chức năng thế giới quan: Triết học Mác – Lênin giúp con người có cách nhìn khoa học về thế giới, hiểu đúng bản chất của tự nhiên, xã hội và con người. Từ đó hình thành thế giới quan duy vật biện chứng.",
            "Chức năng phương pháp luận: Triết học Mác – Lênin cung cấp những nguyên tắc và phương pháp chung giúp con người nhận thức và cải tạo thế giới một cách đúng đắn, khoa học và hiệu quả.",
            "Vai trò thực tiễn: Triết học Mác – Lênin định hướng cho hoạt động thực tiễn, góp phần cải tạo xã hội và thúc đẩy sự phát triển của con người.",
          ],
        },
      ],
    },
    summary: {
      sections: [
        {
          title: "Khái niệm triết học Mác – Lênin",
          points: [
            { text: "Hệ thống quan điểm duy vật biện chứng." },
            { text: "Thế giới quan và phương pháp luận khoa học của giai cấp công nhân." },
          ],
          memorize: "Triết học Mác – Lênin = duy vật biện chứng + phương pháp khoa học.",
        },
        {
          title: "Đối tượng của triết học Mác – Lênin",
          points: [
            { text: "Quy luật chung nhất của tự nhiên." },
            { text: "Quy luật chung nhất của xã hội." },
            { text: "Quy luật chung nhất của tư duy." },
          ],
          memorize: "Triết học nghiên cứu cái chung nhất của thế giới.",
        },
        {
          title: "Chức năng của triết học Mác – Lênin",
          points: [
            { text: "Chức năng thế giới quan: Giúp con người nhìn nhận thế giới một cách khoa học." },
            { text: "Chức năng phương pháp luận: Cung cấp phương pháp nhận thức và cải tạo thế giới." },
          ],
          memorize: "Triết học giúp con người hiểu đúng và hành động đúng.",
        },
      ],
    },
    quiz: [
      { id: 1, question: "Triết học Mác – Lênin là gì?", options: ["Hệ thống thần học", "Hệ thống quan điểm duy vật biện chứng", "Hệ thống mê tín", "Hệ thống nghệ thuật"], correctAnswer: 1 },
      { id: 2, question: "Người xây dựng nền tảng triết học Mác là ai?", options: ["Plato và Aristotle", "Kant và Hegel", "C. Mác và Ph. Ăngghen", "Feuerbach và Hume"], correctAnswer: 2 },
      { id: 3, question: "Người phát triển triết học Mác trong giai đoạn mới là ai?", options: ["Hegel", "Lênin", "Berkeley", "Kant"], correctAnswer: 1 },
      { id: 4, question: "Triết học Mác – Lênin nghiên cứu gì?", options: ["Một lĩnh vực khoa học riêng", "Quy luật chung nhất của tự nhiên, xã hội và tư duy", "Chỉ nghiên cứu xã hội", "Chỉ nghiên cứu tự nhiên"], correctAnswer: 1 },
      { id: 5, question: "Đối tượng nghiên cứu của triết học Mác – Lênin không bao gồm:", options: ["Tự nhiên", "Xã hội", "Tư duy", "Nghệ thuật biểu diễn"], correctAnswer: 3 },
      { id: 6, question: "Triết học Mác – Lênin là thế giới quan của giai cấp nào?", options: ["Địa chủ", "Tư sản", "Công nhân", "Quý tộc"], correctAnswer: 2 },
      { id: 7, question: "Chức năng thế giới quan giúp con người:", options: ["Giải trí", "Hiểu đúng thế giới", "Tạo mê tín", "Xây dựng thần học"], correctAnswer: 1 },
      { id: 8, question: "Chức năng phương pháp luận có vai trò:", options: ["Cung cấp phương pháp nhận thức và cải tạo thế giới", "Phát triển tín ngưỡng", "Xây dựng nghệ thuật", "Tạo ra mê tín"], correctAnswer: 0 },
      { id: 9, question: "Triết học Mác – Lênin nhấn mạnh vai trò của:", options: ["Thần học", "Cảm giác cá nhân", "Thực tiễn", "Mê tín"], correctAnswer: 2 },
      { id: 10, question: "Triết học Mác – Lênin thuộc thế giới quan nào?", options: ["Thế giới quan thần thoại", "Thế giới quan duy vật biện chứng", "Thế giới quan duy tâm", "Thế giới quan tôn giáo"], correctAnswer: 1 },
      { id: 11, question: "Khác với khoa học cụ thể, triết học Mác – Lênin nghiên cứu:", options: ["Từng lĩnh vực riêng biệt", "Quy luật chung nhất", "Chỉ kinh tế", "Chỉ chính trị"], correctAnswer: 1 },
      { id: 12, question: "Triết học Mác – Lênin có vai trò gì?", options: ["Định hướng nhận thức và hành động", "Chỉ giải trí", "Chỉ nghiên cứu lịch sử", "Tạo tín ngưỡng mới"], correctAnswer: 0 },
      { id: 13, question: "Triết học Mác – Lênin là sự phát triển cao nhất của:", options: ["Chủ nghĩa duy vật và phép biện chứng", "Chủ nghĩa duy tâm", "Thần học trung đại", "Chủ nghĩa kinh viện"], correctAnswer: 0 },
      { id: 14, question: "Triết học Mác – Lênin không chỉ giải thích thế giới mà còn:", options: ["Phủ nhận khoa học", "Cải tạo thế giới", "Xây dựng mê tín", "Phát triển thần học"], correctAnswer: 1 },
      { id: 15, question: "Triết học Mác – Lênin giúp con người:", options: ["Hiểu đúng và hành động đúng", "Từ bỏ khoa học", "Chỉ tin vào cảm giác", "Không cần thực tiễn"], correctAnswer: 0 },
    ],
    flashcards: [
      { id: 1, question: "Triết học Mác – Lênin là gì?", answer: "Hệ thống quan điểm duy vật biện chứng" },
      { id: 2, question: "Ai xây dựng triết học Mác?", answer: "C. Mác và Ph. Ăngghen" },
      { id: 3, question: "Ai phát triển triết học Mác trong thời đại mới?", answer: "V.I. Lênin" },
      { id: 4, question: "Triết học Mác – Lênin nghiên cứu gì?", answer: "Quy luật chung nhất của tự nhiên, xã hội và tư duy" },
      { id: 5, question: "Đối tượng nghiên cứu của triết học gồm những gì?", answer: "Tự nhiên, xã hội và tư duy" },
      { id: 6, question: "Triết học Mác – Lênin là thế giới quan của ai?", answer: "Giai cấp công nhân" },
      { id: 7, question: "Chức năng thế giới quan là gì?", answer: "Giúp con người hiểu đúng thế giới" },
      { id: 8, question: "Chức năng phương pháp luận là gì?", answer: "Cung cấp phương pháp nhận thức và cải tạo thế giới" },
      { id: 9, question: "Triết học Mác – Lênin nhấn mạnh vai trò gì?", answer: "Vai trò của thực tiễn" },
      { id: 10, question: "Triết học Mác – Lênin thuộc thế giới quan nào?", answer: "Thế giới quan duy vật biện chứng" },
      { id: 11, question: "Triết học khác khoa học cụ thể ở điểm nào?", answer: "Nghiên cứu quy luật chung nhất" },
      { id: 12, question: "Triết học Mác – Lênin giúp con người làm gì?", answer: "Nhận thức và cải tạo thế giới" },
      { id: 13, question: "Triết học Mác – Lênin mang tính gì?", answer: "Tính khoa học và cách mạng" },
      { id: 14, question: "Vai trò của triết học đối với con người là gì?", answer: "Định hướng nhận thức và hành động" },
      { id: 15, question: "Triết học Mác – Lênin là sự phát triển cao nhất của gì?", answer: "Chủ nghĩa duy vật và phép biện chứng" },
    ],
  },
  {
    id: "5",
    title: "Vật Chất & Phương Thức Tồn Tại",
    subtitle: "Quan niệm về vật chất và cách mạng khoa học tự nhiên",
    content: {
      sections: [
        {
          title: "Quan niệm về phạm trù vật chất trước Mác",
          paragraphs: [
            "Chủ nghĩa duy tâm thừa nhận sự tồn tại của các sự vật và hiện tượng nhưng lại phủ nhận tính tồn tại khách quan của chúng. Theo quan điểm này, thế giới vật chất phụ thuộc vào ý thức hoặc tinh thần. Ý thức được xem là cái có trước và quyết định thế giới vật chất.",
            "Các nhà triết học duy vật thời cổ đại cho rằng vật chất là cơ sở đầu tiên tạo nên thế giới. Tuy nhiên, họ thường đồng nhất vật chất với một dạng vật thể cụ thể. Ở Trung Hoa cổ đại: Kim, Mộc, Thủy, Hỏa, Thổ. Ở Ấn Độ cổ đại: đất, nước, lửa, không khí. Tại Hy Lạp cổ đại: Thalès (nước), Heraclite (lửa), Démocrite (nguyên tử).",
            "Đến thế kỷ XVII – XVIII, dưới ảnh hưởng của cơ học cổ điển, nhiều nhà triết học duy vật đồng nhất vật chất với khối lượng và giải thích thế giới như một cỗ máy cơ học. Họ tách rời vật chất khỏi vận động, không gian và thời gian; nhìn sự vật theo hướng cô lập, tĩnh tại nên mang hạn chế siêu hình và máy móc.",
          ],
        },
        {
          title: "Cuộc cách mạng trong khoa học tự nhiên cuối thế kỷ XIX – đầu thế kỷ XX",
          paragraphs: [
            "Cuối thế kỷ XIX – đầu thế kỷ XX, nhiều phát minh khoa học quan trọng ra đời: Rơn-ghen phát hiện tia X, Béc-cơ-ren phát hiện hiện tượng phóng xạ, Tômxơn phát hiện điện tử, Kaufman chứng minh khối lượng điện tử thay đổi theo vận tốc, A. Anhxtanh xây dựng thuyết tương đối.",
            "Những phát minh này làm lung lay quan niệm cũ cho rằng nguyên tử là phần tử nhỏ nhất và bất biến của vật chất. Chủ nghĩa duy tâm đã lợi dụng điều này để cho rằng \"vật chất tiêu tan\".",
            "Tuy nhiên, V.I. Lênin khẳng định vật lý học không khủng hoảng mà đang bước vào một cuộc cách mạng khoa học mới. Cái mất đi không phải là vật chất mà là giới hạn hiểu biết cũ của con người về vật chất. Những phát minh mới chỉ làm cho nhận thức của con người về thế giới vật chất trở nên đầy đủ và sâu sắc hơn.",
          ],
        },
      ],
    },
    summary: {
      sections: [
        {
          title: "Quan niệm về vật chất trước Mác",
          points: [
            { text: "Chủ nghĩa duy tâm: Ý thức quyết định vật chất." },
            { text: "Chủ nghĩa duy vật cổ đại: Vật chất là cơ sở của thế giới nhưng bị đồng nhất với vật thể cụ thể." },
            { text: "Chủ nghĩa duy vật siêu hình: Giải thích thế giới theo kiểu máy móc, cơ học." },
          ],
          memorize: "Duy tâm → ý thức trước. Duy vật → vật chất trước.",
        },
        {
          title: "Cuộc cách mạng khoa học tự nhiên",
          points: [
            { text: "Các phát minh cuối thế kỷ XIX – đầu XX đã làm thay đổi hiểu biết cũ về vật chất." },
            { text: "Bác bỏ quan điểm duy vật siêu hình." },
            { text: "Mở đường cho quan điểm duy vật biện chứng." },
          ],
          memorize: "Không phải vật chất tiêu tan, mà giới hạn hiểu biết cũ bị phá vỡ.",
        },
      ],
    },
    quiz: [
      { id: 1, question: "Chủ nghĩa duy tâm cho rằng:", options: ["Vật chất tồn tại khách quan", "Ý thức quyết định vật chất", "Vật chất quyết định ý thức", "Không tồn tại ý thức"], correctAnswer: 1 },
      { id: 2, question: "Các nhà duy vật cổ đại thường:", options: ["Phủ nhận vật chất", "Đồng nhất vật chất với vật thể cụ thể", "Xem vật chất là tinh thần", "Cho rằng thế giới không tồn tại"], correctAnswer: 1 },
      { id: 3, question: "Thalès cho rằng nguồn gốc của vũ trụ là:", options: ["Lửa", "Không khí", "Nước", "Nguyên tử"], correctAnswer: 2 },
      { id: 4, question: "Heraclite xem yếu tố cơ bản của thế giới là:", options: ["Đất", "Lửa", "Nước", "Không khí"], correctAnswer: 1 },
      { id: 5, question: "Démocrite cho rằng thế giới được tạo thành từ:", options: ["Tinh thần", "Nguyên tử", "Ý niệm", "Khí"], correctAnswer: 1 },
      { id: 6, question: "Chủ nghĩa duy vật siêu hình chịu ảnh hưởng mạnh của:", options: ["Tôn giáo", "Cơ học cổ điển", "Nghệ thuật", "Tâm lý học"], correctAnswer: 1 },
      { id: 7, question: "Quan điểm duy vật siêu hình nhìn thế giới như:", options: ["Một quá trình phát triển liên tục", "Một cỗ máy cơ học", "Một thế giới tinh thần", "Một giấc mơ"], correctAnswer: 1 },
      { id: 8, question: "Ai phát hiện ra tia X?", options: ["Béc-cơ-ren", "Tômxơn", "Rơn-ghen", "Anhxtanh"], correctAnswer: 2 },
      { id: 9, question: "Ai phát hiện ra điện tử?", options: ["Tômxơn", "Kaufman", "Rơn-ghen", "Newton"], correctAnswer: 0 },
      { id: 10, question: "A. Anhxtanh nổi tiếng với:", options: ["Thuyết tiến hóa", "Thuyết tương đối", "Thuyết nguyên tử", "Thuyết hấp dẫn"], correctAnswer: 1 },
      { id: 11, question: "Chủ nghĩa duy tâm đã lợi dụng các phát minh khoa học để cho rằng:", options: ["Vật chất phát triển hơn", "Vật chất tiêu tan", "Ý thức biến mất", "Khoa học sai lầm"], correctAnswer: 1 },
      { id: 12, question: "Theo Lênin, cái \"tiêu tan\" thực chất là:", options: ["Vật chất", "Nguyên tử", "Giới hạn hiểu biết cũ của con người", "Khoa học tự nhiên"], correctAnswer: 2 },
      { id: 13, question: "V.I. Lênin cho rằng vật lý học đang:", options: ["Khủng hoảng hoàn toàn", "Bước vào cuộc cách mạng khoa học", "Phủ nhận vật chất", "Phát triển thần học"], correctAnswer: 1 },
      { id: 14, question: "Các phát minh khoa học cuối thế kỷ XIX – đầu XX đã:", options: ["Bác bỏ khoa học", "Làm rõ hơn hiểu biết về vật chất", "Phủ nhận vật chất", "Chứng minh thế giới duy tâm"], correctAnswer: 1 },
      { id: 15, question: "Ý nghĩa của cuộc cách mạng khoa học tự nhiên là:", options: ["Khẳng định duy tâm", "Mở đường cho duy vật biện chứng", "Phủ nhận khoa học", "Tạo ra thần học mới"], correctAnswer: 1 },
    ],
    flashcards: [
      { id: 1, question: "Chủ nghĩa duy tâm cho rằng gì?", answer: "Ý thức quyết định vật chất" },
      { id: 2, question: "Chủ nghĩa duy vật cho rằng gì?", answer: "Vật chất có trước và quyết định ý thức" },
      { id: 3, question: "Các nhà duy vật cổ đại thường đồng nhất vật chất với gì?", answer: "Vật thể cụ thể (nước, lửa, nguyên tử...)" },
      { id: 4, question: "Thalès cho rằng gì?", answer: "Nước là nguồn gốc của vũ trụ" },
      { id: 5, question: "Heraclite cho rằng gì?", answer: "Lửa là yếu tố cơ bản của thế giới" },
      { id: 6, question: "Démocrite cho rằng gì?", answer: "Thế giới được tạo thành từ nguyên tử" },
      { id: 7, question: "Duy vật siêu hình nhìn thế giới như thế nào?", answer: "Như một cỗ máy cơ học" },
      { id: 8, question: "Ai phát hiện tia X?", answer: "Rơn-ghen" },
      { id: 9, question: "Ai phát hiện điện tử?", answer: "Tômxơn" },
      { id: 10, question: "Anhxtanh nổi tiếng với gì?", answer: "Thuyết tương đối" },
      { id: 11, question: "Chủ nghĩa duy tâm lợi dụng khoa học để nói gì?", answer: "\"Vật chất tiêu tan\"" },
      { id: 12, question: "Theo Lênin, cái tiêu tan thực chất là gì?", answer: "Giới hạn hiểu biết cũ của con người" },
      { id: 13, question: "Lênin cho rằng vật lý học đang làm gì?", answer: "Bước vào cuộc cách mạng khoa học" },
      { id: 14, question: "Ý nghĩa của cuộc cách mạng khoa học tự nhiên?", answer: "Mở đường cho duy vật biện chứng" },
      { id: 15, question: "Các phát minh khoa học cuối thế kỷ XIX–XX có ý nghĩa gì?", answer: "Làm rõ hơn hiểu biết về vật chất" },
    ],
  },
];
