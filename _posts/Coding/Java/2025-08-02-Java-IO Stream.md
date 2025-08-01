---
title: "[Java] 입출력 스트림"
date: 2025-08-02 12:00:00 +09:00
categories: [Coding, Java]
tags:
  - Java
---

```
💡 java.io.* : io(input/output)
    - 기본 input : keyboard
    - 기본 output : 화면
```

## # stream
: 여러 자료 처리에 대한 기능을 구현해 놓은 클래스 (입출력을 수행할 때 어느 한 쪽에서 다른 쪽으로 데이터 전달 시 두 대상을 연결하는 통로)

<div style="display: flex; justify-content: center; gap: 10px;">
	<img src="/assets/img/Coding/Java/입출력 스트림/Untitled.png" align="center" alt="io1">
  <img src="/assets/img/Coding/Java/입출력 스트림/Untitled 1.png" align="center" alt="io2">
  <img src="/assets/img/Coding/Java/입출력 스트림/Untitled 2.png" align="center" alt="io3">
</div>

- 단방향만 가능 (입력, 출력 → 2개의 스트림 필요)

### 1. 바이트 기반 스트림 (문자, 이미지, 동영상, ...)

- InputStream (추상클래스) : 입력 스트림 부모

```java
import java.io.InputStream;

InputStream in = System.in;
// in.read(); : 한 바이트씩 읽어와서 int 로 리턴
// in.read(byte[] b); : byte 배열로 읽어와서 읽어온 byte 를 int 로 리턴
// in.read(byte[] b, 0, 100); : 입력 스트림에서 100byte 읽어와서 0번 위치부터 저장
```

- OutputStream (추상클래스) : 출력 스트림 부모

```java
import java.io.OutputStream;

OutputStream out = System.out;
// out.write();
// out.write(byte[] b);
// out.write(byte[] b, 0, 100);
```

### 2. 문자 기반 스트림 (문자)

* Charset 표준 : ISO-8859-1, UTF-8, UTF-16

윈도우즈 MS949 : 인코딩이 좀 달라서 한글이 깨질 수 있음

- Reader (추상클래스)
    - 자바 소스 파일 읽기
        - FileEx1.java 읽기 → .\src\io\FileEx1.java

```java
import java.io.Reader;

Reader reader = null;
Writer writer = null;
try {
	reader = new FileReader("c:\\temp\\file1.txt", Charset.forName("utf-8"));
	// reader.read(); : 하나의 문자 읽어오기
	// reader.read(char[] cbuf); : 입력소스로부터 배열의 크기만큼 읽어서 배열에 저장
	// reader.read(char[] cbuf, int off, int len); : 입력소스로부터 len 개 만큼 읽어서 배열의 off 위치에 저장
	
	writer = new FileWriter("c:\\temp\\test1.txt");
	// writer.write(String str);
	// writer.write(int ch);
	// writer.write(char[] cbuf);
	
	int data = 0;
	char[] cbuf = new char[1024];
	while ((data = reader.read(cbuf)) != -1) {
		// System.out.print((char) data);
		writer.write(new String(cbuf));
	}
} catch (FileNotFoundException e) {
	e.printStackTrace();
} catch (IOException e) {
	e.printStackTrace();
} finally {
	try {
		reader.close();
		writer.close();
	} catch (IOException e) {
		e.printStackTrace();
	}
}
```

- Writer (추상클래스) : 문자 단위의 출력만 가능
    - FileWriter : 한글로 작성된 문자열 출력
    - \r\n (CRLF)
        - \r (CR : 캐리지리턴) : 맨앞으로 이동
        - \n (LF : 라인피드) : 새로운 라인

```java
import java.io.FileWriter;
 
try (FileWriter fw = new FileWriter("c:\\temp\\output1.txt", true)) {
	fw.write("FileWriter1\r\n");
	fw.write("FileWriter2");
} catch (Exception e) {
	e.printStackTrace();
}
```

### 3. File

: 파일과 디렉토리를 다룰 수 있음

- \t, \n → \만 사용 불가하여 \\ (2개) 사용

* 경로 구분자 : 윈도우 → \ , 유닉스(리눅스) → /

```java
import java.io.File;

public static void main(String[] args) throws IOException {
	// File 객체 생성
	File f1 = new File("c:\\temp\\test1.txt");
	File f2 = new File("c:\\temp", "test1.txt");
	
	// 경로를 제외한 파일명
	f1.getName(); → test1.txt
	
	// 확장자를 제외한 파일명
	int pos = fileName.lastIndexOf(".");
	fileName.substring(0, pos); → test1
	
	// 확장자
	fileName.substring(pos + 1); → txt
	
	// 경로 메서드
	// 경로를 포함한 파일명
	f1.getPath(); → c:\temp\test1.txt
	
	// 파일의 절대 경로
	f1.getAbsolutePath(); → c:\temp\test1.txt
	
	// 파일의 정규 경로
	f1.getCanonicalPath(); → C:\temp\test1.txt
	
	// 파일이 속해 있는 디렉토리
	f1.getParent(); → c:\temp
	
	// 경로 구분자
	// pathSeparator : 세미콜론
	System.out.println(File.pathSeparator); → ;
	// File.separator : 역슬래시
	System.out.println(File.separator); → \
	
	// user.dir : 현재 실행중인 디렉토리 위치
	System.getProperty("user.dir"); → E:\source\javasource
}
```

```
💡 IOException : 입출력 예외
    - 입력, 출력을 다루는 메서드에 예외처리가 없다면 컴파일 에러 발생 ( print~() : 자체적으로 예외처리 되어있음)
    → 예외가 발생할 수 있는 메서드에 throws IOException
```

- 자바를 통해 윈도우에 접근하여 폴더, 파일 생성

```java
File temp = new File("c:\\temp");
File dir = new File("c:\\temp\\dir");
File file2 = new File(temp, "file1.txt");

// 존재하지 않을 때 새로 생성
if (!dir.exists()) dir.mkdirs();
if (!file1.exists()) file1.createNewFile();

// temp 폴더 읽어오기
File[] files = temp.listFiles();

for (File file : files) {
	String fileName = file.getName();
	      
	if (file.isDirectory()) {
		System.out.println(fileName); → dir
	} else {
		System.out.println(file.length() + fileName); → 크기 + 이름
	}
}
```

### 4. FileInputStream, FileOutputStream

: 파일의 내용 읽어오기

```java
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

try (
	InputStream in = new FileInputStream(new File("c:\\temp\\file1.txt"));
	OutputStream out = new FileOutputStream("c:\\temp\\file1_copy.txt"); // 복제
) {
	int data = 0;
	byte b[] = new byte[1024];
	while ((data = in.read(b)) != -1) {
		out.write(b);
	}
} catch (FileNotFoundException e) {
	e.printStackTrace();
} catch (IOException e) {
	e.printStackTrace();
}
```

### 5. java.nio.file

: io 패키지 향상

```java
import java.nio.file.*;

// c:\\temp 패키지의 파일 가져오기
Path path = Paths.get("c:\\temp");

try (Stream<Path> stream = Files.list(path)) {
// 파일명 출력
	stream.forEach(file -> System.out.println(file.getFileName()));
} catch (Exception e) {
	e.printStackTrace();
}
```

## # 보조스트림

: 스트림의 기능 보완, 데이터 입출력 기능 없음

### 1.  바이트 기반

- BufferedInputStream / BufferedOutputStream
    
    : 버퍼를 이용한 입출력 향상
    
    - 버퍼클래스 + 배열 사용 : 입출력 속도 단축
    
    ```java
    import java.io.BufferedInputStream;
    import java.io.BufferedOutputStream;
    import java.io.FileInputStream;
    import java.io.FileOutputStream;
    
    try (
    	// inputStream을 변수로 받아 BufferedInputStream 생성
    	FileInputStream fis = new FileInputStream("c:\\temp\\test1.txt");
    	BufferedInputStream bis = new BufferedInputStream(fis);
    	// outputStream을 변수로 받아 BufferedInputStream 생성
    	FileOutputStream fos = new FileOutputStream("c:\\temp\\output2.txt");
    	BufferedOutputStream bos = new BufferedOutputStream(fos)
    ) {
    int data = 0;
    	while ((data = bis.read()) != -1) {
    	bos.write(data);
    	}
    } catch (Exception e) {
    	e.printStackTrace();
    }
    ```
    
- DataInputStream / DataOutputStream
    
    : byte 단위가 아닌 기본 자료형 단위로 데이터를 처리
    
    - 기본 자료형 값을 16진수로 표현하여 저장
    
    ```java
    import java.io.DataInputStream;
    import java.io.DataOutputStream;
    import java.io.FileInputStream;
    import java.io.FileOutputStream;
     
    try (
    	FileOutputStream fos = new FileOutputStream("c:\\temp\\primitive.dat");
    	DataOutputStream dos = new DataOutputStream(fos);
    	FileInputStream fis = new FileInputStream("c:\\temp\\primitive.dat");
    	DataInputStream dis = new DataInputStream(fis)
    ) {
    	dos.writeUTF("홍길동");
    	dos.writeDouble(95.5);
    	dos.writeInt(2);
    	
    	dos.writeUTF("김자바");
    	dos.writeDouble(95.7);
    	dos.writeInt(2);
    	
    	// 읽기
    	for (int i = 0; i < 2; i++) {
    		String name = dis.readUTF();
    		double jumsu = dis.readDouble();
    		int num = dis.readInt();
    		System.out.println(num + " : " + name + "(" + jumsu + ")");
    	}
    } catch (Exception e) {
    	e.printStackTrace();
    }
    ```
    
- PrintStream
    
    : 버퍼 사용하며, print, println, printf()
    

### 2. 문자 기반

- BufferedReader / BufferedWriter
    
    : 버퍼를 이용한 입출력 향상
    
    - readLine() : 줄 단위로 읽어오기
    - newLine() : \r\n의 의미
    
    ```java
    import java.io.BufferedReader;
    import java.io.BufferedWriter;
    import java.io.FileReader;
    import java.io.FileWriter;
    
    try (
    	FileReader fr = new FileReader("c:\\temp\\test1.txt");
    	BufferedReader br = new BufferedReader(fr);
    	FileWriter fw = new FileWriter("c:\\temp\\output3.txt");
    	BufferedWriter bw = new BufferedWriter(fw)
    ) {
    	String str = null;
    	
    	while ((str = br.readLine()) != null) {
    		bw.write(str);
    		bw.newLine();
    	}
    } catch (Exception e) {
    	e.printStackTrace();
    }
    ```
    

## # 브릿지스트림

: 바이트 스트림 → 문자스트림 / 문자스트림 → 바이트 스트림

- InputStreamReader / OutputStreamReader
    
    ```java
    import java.io.FileInputStream;
    import java.io.InputStreamReader;
    
    try (
    	FileInputStream fis = new FileInputStream("c:\\temp\\test1.txt");
    	InputStreamReader ir = new InputStreamReader(fis)
    ) {
    	int data = 0;
    	
    	char cbuf[] = new char[1024];
    	while ((data = ir.read(cbuf)) != -1) {
    		System.out.println(cbuf);
    	}
    } catch (Exception e) {
    	e.printStackTrace();
    }
    ```
    

## # 직렬화(Serialization)

: 인스턴스의 어느 순간 상태를 그대로 저장하거나 네트워크를 통해 전송하는 것 / 저장된 내용이나 전송받은 내용을 다시 복원하는 것을 역직렬화라고 함

- ObjectInputStream (역직렬화)
    
    : 스트림에서 객체 입력
    
- ObjectOutputStream (직렬화)
    
    : 스트림에 객체 출력
    

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

Person person1 = new Person("홍길동", "엔지니어", "010-1234-1234");
Person person2 = new Person("김유신", "선생님", "010-4567-4567");

try (
	FileOutputStream fos = new FileOutputStream("c:\\temp\\serial.dat");
	ObjectOutputStream oos = new ObjectOutputStream(fos);
	FileInputStream fis = new FileInputStream("c:\\temp\\serial.dat");
	ObjectInputStream ois = new ObjectInputStream(fis);
) {
	oos.writeObject(person1);
	oos.writeObject(person2);
	
	for (int i = 0; i < 2; i++) {
		Person p = (Person) ois.readObject();
		System.out.println(p);
	}
} catch (Exception e) {
	e.printStackTrace();
}
```

### 1. Serializable

: 클래스를 직렬화하겠다는 의미

```java
import java.io.Serializable;

public class Person implements Serializable {

  private String name;
  private String job;
  // transient : 직렬화 대상에서 제외
  private transient String tel; 

  public Person(String name, String job, String tel) {
    this.name = name;
    this.job = job;
    this.tel = tel;
  }
}
```